module.exports = {
    "rules": {
        "arrow-spacing": "error",
        "block-scoped-var": "error",
        "block-spacing": "error",
        "comma-dangle": [
            "error",
            "always-multiline"
        ],
        "computed-property-spacing": [
            "error",
            "never"
        ],
        "curly": [
            "error",
            "all"
        ],
        "dot-notation": [
            "error"
        ],
        "eqeqeq": [
            "error",
            "smart"
        ],
        "guard-for-in": "error",
        "indent": ["error", "tab", {
          "SwitchCase": 1,
          "MemberExpression": 1,
          "FunctionDeclaration": {"parameters": 1},
          "FunctionExpression": {"parameters": 1},
          "CallExpression": {"arguments": 1}
        }],
        "keyword-spacing": "error",
        "new-cap": "error",
        "new-parens": "error",
        "no-alert": "error",
        "no-bitwise": "error",
        "no-caller": "error",
        "no-cond-assign": [
            "error",
            "except-parens"
        ],
        "no-debugger": "error",
        "no-empty": "error",
        "no-empty-pattern": "error",
        "no-eval": "error",
        "no-extend-native": "error",
        "no-extra-bind": "error",
        "no-extra-label": "error",
        "no-implicit-coercion": [
            "error",
            {
                "allow": [
                    "!!"
                ]
            }
        ],
        "no-implied-eval": "error",
        "no-irregular-whitespace": "error",
        "no-iterator": "error",
        "no-loop-func": "error",
        "no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
        "no-multi-str": "error",
        "no-param-reassign": "error",
        "no-proto": "error",
        "no-redeclare": "error",
        "no-script-url": "error",
        "no-self-assign": "error",
        "no-sequences": "error",
        "no-shadow": "error",
        "no-spaced-func": "error",
        "no-throw-literal": "error",
        "no-trailing-spaces": "error",
        "no-undef": "error",
        "no-unused-vars": [
            "error",
            {
                "vars": "all",
                "args": "after-used"
            }
        ],
        "no-useless-call": "error",
        "no-with": "error",
        "radix": "error",
        "semi": [
            "error",
            "always"
        ],
        "space-before-blocks": [
            "error",
            {
                "classes": "always",
                "functions": "always",
                "keywords": "always"
            }
        ],
        "space-infix-ops": "error",
        "space-unary-ops": "error",
        "spaced-comment": [
            "error",
            "always"
        ],
        "valid-typeof": "error",
        "wrap-iife": [
            "error",
            "inside"
        ],
        "global-require":"error", //nodejs specific
        "handle-callback-err": "error",  //nodejs specific
        "no-sync": "error", //nodejs specific
        "no-var": "error",
        "prefer-template": "error",
        "object-shorthand": "error",
        "strict": "warn",
        "prefer-arrow-callback": ["warn", { "allowNamedFunctions": true }],
        "camelcase": "warn",
        "no-empty-function": "error",
        "no-extra-parens": "warn",
        "default-case": "error",
        "no-case-declarations": "error",
        "prefer-spread": "error",
        "prefer-rest-params": "error",
    }
};