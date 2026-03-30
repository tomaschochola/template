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

import { WebpackStack } from '@premierstacks/webpack-stack';

// eslint-disable-next-line no-restricted-exports
export default function (env, argv) {
  let stack = new WebpackStack(env, argv)
    .entry({
      index: ['./src/index.ts'],
    })
    .environment()
    .define()
    .html()
    .copy();

  if (stack.isProduction) {
    stack = stack.gzip().brotli();
  }

  return stack.build();
}
