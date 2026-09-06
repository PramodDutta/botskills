import importlib.util
from pathlib import Path
import subprocess
import tempfile
import unittest

SPEC = importlib.util.spec_from_file_location('register', Path(__file__).parents[1] / 'register.py')
register = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(register)


class RegistryTests(unittest.TestCase):
    @staticmethod
    def passing_gate(slugs):
        report = '\n'.join(f'{s} 3400 13 4 4 155 2 1 OK' for s in slugs)
        return subprocess.CompletedProcess([], 0, report, '')

    def test_deterministic_order_with_pinned_articles(self):
        a = register.render_registry(['zebra', 'introducing-botskills', 'alpha'])
        b = register.render_registry(['alpha', 'zebra', 'introducing-botskills'])
        self.assertEqual(a, b)
        self.assertLess(a.index("slug: 'introducing-botskills'"), a.index("slug: 'alpha'"))
        self.assertEqual(a.count("slug: 'alpha'"), 1)
        self.assertIn("import { post as post_alpha } from './alpha';", a)

    def test_invalid_duplicate_or_empty_slugs_fail(self):
        for slugs in [[], ['a', 'a'], ['../outside'], ["quote'"], ['two--hyphens']]:
            with self.subTest(slugs=slugs), self.assertRaises(ValueError):
                register.render_registry(slugs)

    def test_failure_or_crash_leaves_registry_untouched(self):
        # Even exit zero must include a complete report. A no-op gate is a failure.
        for code in [0, 1, 2, -9]:
            with self.subTest(code=code), tempfile.TemporaryDirectory() as directory:
                root = Path(directory)
                (root / 'article.ts').write_text('invalid article')
                target = root / 'index.ts'
                target.write_text('keep published registry')
                with self.assertRaises(RuntimeError):
                    register.register(root, run_gate=lambda _: subprocess.CompletedProcess([], code, '', ''))
                self.assertEqual(target.read_text(), 'keep published registry')

    def test_check_is_read_only_and_repeat_write_is_idempotent(self):
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            (root / 'article.ts').write_text('article fixture')
            target = root / 'index.ts'
            target.write_text('old')
            gate = self.passing_gate
            self.assertEqual(register.register(root, check=True, run_gate=gate), 1)
            self.assertEqual(target.read_text(), 'old')
            self.assertEqual(register.register(root, run_gate=gate), 0)
            written = target.stat().st_mtime_ns
            self.assertEqual(register.register(root, check=True, run_gate=gate), 0)
            self.assertEqual(register.register(root, run_gate=gate), 0)
            self.assertEqual(target.stat().st_mtime_ns, written)


if __name__ == '__main__':
    unittest.main()
