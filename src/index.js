/**
 * @file
 * @author Tomáš Chochola <tomaschochola@tomaschochola.cz>
 * @copyright © 2026 Tomáš Chochola <tomaschochola@tomaschochola.cz>
 *
 * @license CC-BY-ND-4.0
 *
 * @see {@link https://creativecommons.org/licenses/by-nd/4.0/} License
 * @see {@link https://github.com/tomaschochola} GitHub Profile
 * @see {@link https://github.com/sponsors/tomaschochola} GitHub Sponsors
 */

import eslint from '@eslint/js';
import stylex from '@stylexjs/eslint-plugin';
import stylistic from '@stylistic/eslint-plugin';
import a11y from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';
import compiler from 'eslint-plugin-react-compiler';
import hooks from 'eslint-plugin-react-hooks';
import sonarjs from 'eslint-plugin-sonarjs';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import typescript from 'typescript-eslint';

export const GlobalIgnore = ['**/.DS_Store', '**/.fleet', '**/.idea', '**/.vscode', '**/.zed'];
export const GlobalJavaScript = ['**/*.js', '**/*.mjs', '**/*.cjs'];
export const GlobalJsx = ['**/*.jsx'];
export const GlobalRC = ['**/*.config.js', '**/*.config.mjs', '**/.*rc.js', '**/.*rc.mjs', '**/*.config.cjs', '**/.*rc.cjs'];
export const GlobalTsx = ['**/*.tsx'];
export const GlobalTypeScript = ['**/*.ts', '**/*.mts', '**/*.cts'];
export const RootJavaScript = ['*.js', '*.mjs', '*.cjs'];
export const RootJsx = ['*.jsx'];
export const RootRC = ['*.config.js', '*.config.mjs', '.*rc.js', '.*rc.mjs', '*.config.cjs', '.*rc.cjs'];
export const RootTsx = ['*.tsx'];
export const RootTypeScript = ['*.ts', '*.mts', '*.cts'];

export const GlobalEcmaScript = [...GlobalJavaScript, ...GlobalTypeScript, ...GlobalJsx, ...GlobalTsx];
export const RootEcmaScript = [...RootJavaScript, ...RootTypeScript, ...RootJsx, ...RootTsx];

export class EslintConfig {
  static nodeEnv() {
    return process.env.NODE_ENV ?? 'production';
  }

  static base() {
    return [];
  }

  static recommended(options = {}) {
    return {
      extends: [
        eslint.configs.recommended,
        {
          rules: {
            'no-restricted-exports': [
              'error',
              {
                restrictDefaultExports: {
                  defaultFrom: true,
                  direct: true,
                  named: true,
                  namedFrom: true,
                  namespaceFrom: true,
                },
              },
            ],
          },
        },
      ],
      ...options,
    };
  }

  static typescript(options = {}) {
    return {
      extends: [
        typescript.configs.strictTypeChecked,
        typescript.configs.stylisticTypeChecked,
        {
          languageOptions: {
            parserOptions: {
              projectService: true,
            },
          },
        },
        {
          rules: {

            '@typescript-eslint/consistent-type-exports': 'error',
            '@typescript-eslint/consistent-type-imports': 'error',
            '@typescript-eslint/default-param-last': 'error',
            '@typescript-eslint/explicit-member-accessibility': 'error',
            '@typescript-eslint/method-signature-style': 'error',
            '@typescript-eslint/no-import-type-side-effects': 'error',
            '@typescript-eslint/no-loop-func': 'error',
            '@typescript-eslint/no-shadow': 'error',
            '@typescript-eslint/no-unnecessary-parameter-property-assignment': 'error',
            '@typescript-eslint/no-unnecessary-qualifier': 'error',
            '@typescript-eslint/no-unsafe-type-assertion': 'error',
            '@typescript-eslint/no-use-before-define': 'error',
            '@typescript-eslint/no-useless-empty-export': 'error',
            '@typescript-eslint/parameter-properties': 'error',
            '@typescript-eslint/prefer-enum-initializers': 'error',
            '@typescript-eslint/prefer-readonly': 'error',
            '@typescript-eslint/require-array-sort-compare': 'error',
            '@typescript-eslint/strict-boolean-expressions': [
              'error',
              {
                allowAny: false,
                allowNullableBoolean: false,
                allowNullableEnum: false,
                allowNullableNumber: false,
                allowNullableObject: false,
                allowNullableString: false,
                allowNumber: false,
                allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
                allowString: false,
              },
            ],
            '@typescript-eslint/switch-exhaustiveness-check': 'error',
            'default-param-last': 'off',
            'no-loop-func': 'off',
            'no-shadow': 'off',
            'no-use-before-define': 'off',
          },
        },
      ],
      files: [...GlobalTypeScript, ...GlobalTsx],
      ...options,
    };
  }

  static react(options = {}) {
    return {
      extends: [
        react.configs.flat['recommended'],
        react.configs.flat['jsx-runtime'],
        {
          rules: {
            'react/boolean-prop-naming': 'error',
            'react/checked-requires-onchange-or-readonly': 'error',
            'react/default-props-match-prop-types': 'error',
            'react/destructuring-assignment': 'error',
            'react/forbid-foreign-prop-types': 'error',
            'react/forbid-prop-types': 'error',
            'react/forward-ref-uses-ref': 'error',
            'react/function-component-definition': 'error',
            'react/hook-use-state': 'error',
            'react/iframe-missing-sandbox': 'error',
            'react/jsx-boolean-value': 'error',
            'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
            'react/jsx-fragments': 'error',
            'react/jsx-handler-names': 'error',
            'react/jsx-no-bind': 'error',
            'react/jsx-no-constructed-context-values': 'error',
            'react/jsx-no-leaked-render': 'error',
            'react/jsx-no-literals': 'error',
            'react/jsx-no-script-url': 'error',
            'react/jsx-no-useless-fragment': 'error',
            'react/jsx-pascal-case': 'error',
            'react/jsx-props-no-spread-multi': 'error',
            'react/no-access-state-in-setstate': 'error',
            'react/no-adjacent-inline-elements': 'error',
            'react/no-array-index-key': 'error',
            'react/no-arrow-function-lifecycle': 'error',
            'react/no-danger': 'error',
            'react/no-did-mount-set-state': 'error',
            'react/no-did-update-set-state': 'error',
            'react/no-invalid-html-attribute': 'error',
            'react/no-namespace': 'error',
            'react/no-object-type-as-default-prop': 'error',
            'react/no-redundant-should-component-update': 'error',
            'react/no-this-in-sfc': 'error',
            'react/no-typos': 'error',
            'react/no-unsafe': 'error',
            'react/no-unstable-nested-components': 'error',
            'react/no-unused-class-component-methods': 'error',
            'react/no-unused-prop-types': 'error',
            'react/no-unused-state': 'error',
            'react/no-will-update-set-state': 'error',
            'react/prefer-es6-class': 'error',
            'react/prefer-exact-props': 'error',
            'react/prefer-read-only-props': 'error',
            'react/prefer-stateless-function': 'error',
            'react/require-optimization': 'error',
            'react/state-in-constructor': 'error',
            'react/static-property-placement': 'error',
            'react/style-prop-object': 'error',
            'react/void-dom-elements-no-children': 'error',
          },
        },
        {
          settings: {
            react: {
              version: 'detect',
            },
          },
        },
      ],
      ...options,
    };
  }

  static reactHooks(options = {}) {
    return {
      extends: [
        hooks.configs['recommended-latest'],
        {
          rules: {
            'react-hooks/exhaustive-deps': 'error',
            'react-hooks/rules-of-hooks': 'error',
          },
        },
      ],
      ...options,
    };
  }

  static reactCompiler(options = {}) {
    return {
      extends: [compiler.configs.recommended],
      ...options,
    };
  }

  static jsxA11y(options = {}) {
    return {
      extends: [
        a11y.flatConfigs.strict,
        {
          rules: {
            'jsx-a11y/anchor-ambiguous-text': 'error',
            'jsx-a11y/control-has-associated-label': 'error',
            'jsx-a11y/lang': 'error',
            'jsx-a11y/no-aria-hidden-on-focusable': 'error',
            'jsx-a11y/prefer-tag-over-role': 'error',
          },
        },
      ],
      ...options,
    };
  }

  static stylex(options = {}) {
    return {
      extends: [
        {
          plugins: {
            '@stylexjs': stylex,
          },
          rules: {
            '@stylexjs/no-legacy-contextual-styles': 'error',
            '@stylexjs/no-unused': 'error',
            '@stylexjs/sort-keys': 'error',
            '@stylexjs/valid-shorthands': 'error',
            '@stylexjs/valid-styles': [
              'error',
              {
                propLimits: {
                  viewTimeline: {
                    limit: null,
                    reason: 'Only longhand properties are allowed.',
                  },
                },
              },
            ],
          },
        },
      ],
      ...options,
    };
  }

  static stylistic(options = {}) {
    return {
      extends: [
        stylistic.configs.customize({
          arrowParens: true,
          blockSpacing: true,
          braceStyle: '1tbs',
          commaDangle: 'always-multiline',
          indent: 2,
          jsx: true,
          quoteProps: 'consistent-as-needed',
          quotes: 'single',
          semi: true,
        }),
        {
          rules: {
            '@stylistic/array-bracket-newline': 'error',
            '@stylistic/array-element-newline': [
              'error',
              {
                consistent: true,
                multiline: true,
              },
            ],
            '@stylistic/curly-newline': ['error', 'always'],
            '@stylistic/function-call-argument-newline': ['error', 'consistent'],
            '@stylistic/function-call-spacing': 'error',
            '@stylistic/function-paren-newline': ['error', 'consistent'],
            '@stylistic/implicit-arrow-linebreak': 'error',
            '@stylistic/jsx-child-element-spacing': 'error',
            '@stylistic/jsx-first-prop-new-line': ['error', 'always'],
            '@stylistic/jsx-max-props-per-line': [
              'error',
              {
                maximum: 1,
                when: 'always',
              },
            ],
            '@stylistic/jsx-one-expression-per-line': ['error', { allow: 'none' }],
            '@stylistic/jsx-pascal-case': 'error',
            '@stylistic/jsx-props-no-multi-spaces': 'error',
            '@stylistic/jsx-self-closing-comp': 'error',
            '@stylistic/line-comment-position': 'error',
            '@stylistic/linebreak-style': 'error',
            '@stylistic/lines-around-comment': [
              'error',
              {
                afterHashbangComment: true,
                allowArrayStart: true,
                allowBlockStart: true,
                allowClassStart: true,
                allowEnumStart: true,
                allowInterfaceStart: true,
                allowModuleStart: true,
                allowObjectStart: true,
                allowTypeStart: true,
                beforeBlockComment: true,
                beforeLineComment: true,
              },
            ],
            '@stylistic/multiline-comment-style': 'error',
            '@stylistic/no-confusing-arrow': 'error',
            '@stylistic/no-extra-semi': 'error',
            '@stylistic/nonblock-statement-body-position': 'error',
            '@stylistic/object-curly-newline': [
              'error',
              {
                consistent: true,
                multiline: true,
              },
            ],
            '@stylistic/object-property-newline': 'error',
            '@stylistic/one-var-declaration-per-line': ['error', 'always'],
            '@stylistic/padding-line-between-statements': [
              'error',
              {
                blankLine: 'always',
                next: 'return',
                prev: '*',
              },
              {
                blankLine: 'always',
                next: 'break',
                prev: '*',
              },
              {
                blankLine: 'always',
                next: 'case',
                prev: '*',
              },
              {
                blankLine: 'always',
                next: 'class',
                prev: '*',
              },
              {
                blankLine: 'always',
                next: 'continue',
                prev: '*',
              },
              {
                blankLine: 'always',
                next: 'debugger',
                prev: '*',
              },
              {
                blankLine: 'always',
                next: 'default',
                prev: '*',
              },
              {
                blankLine: 'always',
                next: 'do',
                prev: '*',
              },
              {
                blankLine: 'always',
                next: 'export',
                prev: '*',
              },
              {
                blankLine: 'always',
                next: 'for',
                prev: '*',
              },
              {
                blankLine: 'always',
                next: 'function',
                prev: '*',
              },
              {
                blankLine: 'always',
                next: 'if',
                prev: '*',
              },
              {
                blankLine: 'always',
                next: 'switch',
                prev: '*',
              },
              {
                blankLine: 'always',
                next: 'throw',
                prev: '*',
              },
              {
                blankLine: 'always',
                next: 'try',
                prev: '*',
              },
              {
                blankLine: 'always',
                next: 'while',
                prev: '*',
              },
              {
                blankLine: 'always',
                next: 'with',
                prev: '*',
              },
              {
                blankLine: 'always',
                next: '*',
                prev: ['const', 'let', 'var'],
              },
              {
                blankLine: 'always',
                next: '*',
                prev: ['singleline-const', 'singleline-let', 'singleline-var'],
              },
              {
                blankLine: 'always',
                next: '*',
                prev: ['multiline-const', 'multiline-let', 'multiline-var'],
              },
              {
                blankLine: 'always',
                next: '*',
                prev: 'import',
              },
              {
                blankLine: 'always',
                next: '*',
                prev: 'cjs-import',
              },
              {
                blankLine: 'always',
                next: '*',
                prev: 'export',
              },
              {
                blankLine: 'any',
                next: 'singleline-const',
                prev: 'singleline-const',
              },
              {
                blankLine: 'any',
                next: 'singleline-let',
                prev: 'singleline-let',
              },
              {
                blankLine: 'any',
                next: 'singleline-var',
                prev: 'singleline-var',
              },
              {
                blankLine: 'any',
                next: 'import',
                prev: 'import',
              },
              {
                blankLine: 'any',
                next: 'cjs-import',
                prev: 'cjs-import',
              },
              {
                blankLine: 'any',
                next: 'export',
                prev: 'export',
              },
              {
                blankLine: 'always',
                next: 'multiline-const',
                prev: '*',
              },
              {
                blankLine: 'always',
                next: 'multiline-let',
                prev: '*',
              },
              {
                blankLine: 'always',
                next: 'multiline-var',
                prev: '*',
              },
              {
                blankLine: 'always',
                next: 'multiline-export',
                prev: '*',
              },
              {
                blankLine: 'always',
                next: 'block-like',
                prev: '*',
              },
              {
                blankLine: 'always',
                next: '*',
                prev: 'block-like',
              },
            ],
            '@stylistic/semi-style': 'error',
            '@stylistic/switch-colon-spacing': 'error',
            '@stylistic/wrap-regex': 'error',
          },
        },
        stylistic.configs['disable-legacy'],
      ],
      ...options,
    };
  }

  static sonarjs(options = {}) {
    return {
      extends: [
        sonarjs.configs.recommended,
        {
          rules: {
            'sonarjs/cognitive-complexity': 'off',
            'sonarjs/function-return-type': 'off',
            'sonarjs/no-nested-conditional': 'off',
            'sonarjs/void-use': 'off',
          },
        },
      ],
      ...options,
    };
  }

  static globals(globals, options = {}) {
    return {
      extends: [
        {
          languageOptions: {
            globals: globals,
          },
        },
      ],
      ...options,
    };
  }

  static globalsRc(options = {}) {
    return this.globals({
      ...globals.node,
      ...globals.es2026,
    }, {
      files: GlobalRC,
      ...options,
    });
  }

  static globalsBrowser(options = {}) {
    return this.globals({
      ...globals.browser,
      ...globals.es2026,
    }, {
      files: GlobalEcmaScript,
      ...options,
    });
  }

  static globalsNode(options = {}) {
    return this.globals({
      ...globals.node,
      ...globals.es2026,
    }, {
      files: GlobalEcmaScript,
      ...options,
    });
  }

  static ignores(patterns = GlobalIgnore, name, options = {}) {
    return {
      extends: [globalIgnores(patterns, name)],
      ...options,
    };
  }

  static typescriptDisabled(options = {}) {
    return {
      extends: [typescript.configs.disableTypeChecked],
      files: [...GlobalJavaScript, ...GlobalJsx],
      ...options,
    };
  }

  static compose(...configs) {
    return defineConfig(...configs);
  }
}
