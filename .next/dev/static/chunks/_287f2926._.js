(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Card;
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c1 = CardHeader;
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('leading-none font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c2 = CardTitle;
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c3 = CardDescription;
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('col-start-2 row-span-2 row-start-1 self-start justify-self-end', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c4 = CardAction;
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('px-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_c5 = CardContent;
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center px-6 [.border-t]:pt-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_c6 = CardFooter;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardAction");
__turbopack_context__.k.register(_c5, "CardContent");
__turbopack_context__.k.register(_c6, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
            icon: 'size-9',
            'icon-sm': 'size-8',
            'icon-lg': 'size-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm', 'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]', 'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Input;
;
var _c;
__turbopack_context__.k.register(_c, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/theme-toggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeToggle",
    ()=>ThemeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript) <export default as Sun>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function ThemeToggle() {
    _s();
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("light");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeToggle.useEffect": ()=>{
            const stored = localStorage.getItem("theme");
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            const initial = stored || (prefersDark ? "dark" : "light");
            setTheme(initial);
            document.documentElement.classList.toggle("dark", initial === "dark");
        }
    }["ThemeToggle.useEffect"], []);
    const toggleTheme = ()=>{
        const next = theme === "light" ? "dark" : "light";
        setTheme(next);
        localStorage.setItem("theme", next);
        document.documentElement.classList.toggle("dark", next === "dark");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        variant: "outline",
        size: "icon",
        onClick: toggleTheme,
        className: "h-9 w-9 bg-transparent",
        "aria-label": `Switch to ${theme === "light" ? "dark" : "light"} mode`,
        children: theme === "light" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/components/theme-toggle.tsx",
            lineNumber: 33,
            columnNumber: 28
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/components/theme-toggle.tsx",
            lineNumber: 33,
            columnNumber: 59
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/theme-toggle.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_s(ThemeToggle, "lm84LOZxHN0YC4jzvAwAP/18Sno=");
_c = ThemeToggle;
var _c;
__turbopack_context__.k.register(_c, "ThemeToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/audience/session-join.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SessionJoin",
    ()=>SessionJoin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$theme$2d$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/theme-toggle.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function SessionJoin({ onJoin, error }) {
    _s();
    const [sessionId, setSessionId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const handleSubmit = (e)=>{
        e.preventDefault();
        const trimmed = sessionId.trim();
        if (trimmed) {
            onJoin(trimmed);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex items-center justify-center p-4 bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-4 right-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$theme$2d$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeToggle"], {}, void 0, false, {
                    fileName: "[project]/components/audience/session-join.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/audience/session-join.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "w-full max-w-md border-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                        className: "text-center space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mx-auto w-16 h-16 rounded-sm border-2 border-primary flex items-center justify-center mb-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-2xl font-mono font-bold text-primary",
                                    children: "AF"
                                }, void 0, false, {
                                    fileName: "[project]/components/audience/session-join.tsx",
                                    lineNumber: 35,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/audience/session-join.tsx",
                                lineNumber: 34,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                className: "text-2xl font-serif",
                                children: "Join Presentation"
                            }, void 0, false, {
                                fileName: "[project]/components/audience/session-join.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-muted-foreground",
                                children: "Enter the session code to provide feedback"
                            }, void 0, false, {
                                fileName: "[project]/components/audience/session-join.tsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/audience/session-join.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSubmit,
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    value: sessionId,
                                    onChange: (e)=>setSessionId(e.target.value.toUpperCase()),
                                    placeholder: "Enter Session Code",
                                    className: "text-center text-lg font-mono tracking-widest uppercase",
                                    maxLength: 12
                                }, void 0, false, {
                                    fileName: "[project]/components/audience/session-join.tsx",
                                    lineNumber: 42,
                                    columnNumber: 13
                                }, this),
                                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-destructive text-center",
                                    children: error
                                }, void 0, false, {
                                    fileName: "[project]/components/audience/session-join.tsx",
                                    lineNumber: 49,
                                    columnNumber: 23
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    type: "submit",
                                    className: "w-full",
                                    disabled: !sessionId.trim(),
                                    children: "Join Session"
                                }, void 0, false, {
                                    fileName: "[project]/components/audience/session-join.tsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-muted-foreground text-center pt-2 border-t",
                                    children: [
                                        "Try typing ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-mono font-semibold text-primary",
                                            children: "TEST"
                                        }, void 0, false, {
                                            fileName: "[project]/components/audience/session-join.tsx",
                                            lineNumber: 54,
                                            columnNumber: 26
                                        }, this),
                                        " to see a demo"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/audience/session-join.tsx",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/audience/session-join.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/audience/session-join.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/audience/session-join.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/audience/session-join.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_s(SessionJoin, "iQvvUS2fGE1Z3yXSbkW+4UXSmis=");
_c = SessionJoin;
var _c;
__turbopack_context__.k.register(_c, "SessionJoin");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/audience/connection-status.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConnectionStatus",
    ()=>ConnectionStatus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function ConnectionStatus({ state }) {
    const statusConfig = {
        connecting: {
            color: "bg-amber-500",
            text: "Connecting...",
            pulse: true
        },
        connected: {
            color: "bg-emerald-600",
            text: "Live",
            pulse: false
        },
        disconnected: {
            color: "bg-destructive",
            text: "Disconnected",
            pulse: true
        }
    };
    const config = statusConfig[state];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-2 px-3 py-1.5 bg-card border border-border rounded-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `w-2 h-2 rounded-full ${config.color} ${config.pulse ? "animate-pulse" : ""}`
            }, void 0, false, {
                fileName: "[project]/components/audience/connection-status.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xs font-mono text-muted-foreground uppercase tracking-wider",
                children: config.text
            }, void 0, false, {
                fileName: "[project]/components/audience/connection-status.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/audience/connection-status.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_c = ConnectionStatus;
var _c;
__turbopack_context__.k.register(_c, "ConnectionStatus");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/audience/reaction-buttons.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReactionButtons",
    ()=>ReactionButtons
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const reactions = [
    {
        type: "speed_up",
        label: "Speed Up",
        icon: ">>",
        description: "Go faster"
    },
    {
        type: "slow_down",
        label: "Slow Down",
        icon: "<<",
        description: "Please slow down"
    },
    {
        type: "show_code",
        label: "Show Code",
        icon: "</>",
        description: "Want to see code"
    },
    {
        type: "lost",
        label: "I'm Lost",
        icon: "?",
        description: "Need clarification"
    }
];
function ReactionButtons({ onReaction, disabled }) {
    _s();
    const [activeReaction, setActiveReaction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [cooldowns, setCooldowns] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        speed_up: false,
        slow_down: false,
        show_code: false,
        lost: false
    });
    const handleReaction = async (type)=>{
        if (cooldowns[type] || disabled) return;
        setActiveReaction(type);
        setCooldowns((prev)=>({
                ...prev,
                [type]: true
            }));
        try {
            await onReaction(type);
        } finally{
            setTimeout(()=>{
                setActiveReaction(null);
            }, 200);
            setTimeout(()=>{
                setCooldowns((prev)=>({
                        ...prev,
                        [type]: false
                    }));
            }, 2000);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-2 gap-4",
        children: reactions.map((reaction)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                variant: "outline",
                disabled: disabled || cooldowns[reaction.type],
                onClick: ()=>handleReaction(reaction.type),
                className: `
            h-28 flex flex-col items-center justify-center gap-2
            border-2 transition-all duration-150
            ${activeReaction === reaction.type ? "scale-95 bg-primary/10 border-primary" : ""}
            ${cooldowns[reaction.type] ? "opacity-60" : "hover:border-primary hover:bg-primary/5"}
          `,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-2xl font-mono font-bold text-primary",
                        children: reaction.icon
                    }, void 0, false, {
                        fileName: "[project]/components/audience/reaction-buttons.tsx",
                        lineNumber: 89,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm font-semibold",
                        children: reaction.label
                    }, void 0, false, {
                        fileName: "[project]/components/audience/reaction-buttons.tsx",
                        lineNumber: 90,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs text-muted-foreground",
                        children: reaction.description
                    }, void 0, false, {
                        fileName: "[project]/components/audience/reaction-buttons.tsx",
                        lineNumber: 91,
                        columnNumber: 11
                    }, this)
                ]
            }, reaction.type, true, {
                fileName: "[project]/components/audience/reaction-buttons.tsx",
                lineNumber: 77,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/audience/reaction-buttons.tsx",
        lineNumber: 75,
        columnNumber: 5
    }, this);
}
_s(ReactionButtons, "ZvdnAgWx6XlV0KFKc8oR5FZ5C+8=");
_c = ReactionButtons;
var _c;
__turbopack_context__.k.register(_c, "ReactionButtons");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/textarea.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Textarea",
    ()=>Textarea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
function Textarea({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
        "data-slot": "textarea",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/textarea.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Textarea;
;
var _c;
__turbopack_context__.k.register(_c, "Textarea");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/audience/question-input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QuestionInput",
    ()=>QuestionInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/textarea.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function QuestionInput({ onSubmit, disabled, maxLength = 500 }) {
    _s();
    const [question, setQuestion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSubmit = async ()=>{
        const trimmed = question.trim();
        if (!trimmed || isSubmitting) return;
        setIsSubmitting(true);
        try {
            await onSubmit(trimmed);
            setQuestion("");
        } finally{
            setIsSubmitting(false);
        }
    };
    const handleKeyDown = (e)=>{
        if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
            e.preventDefault();
            handleSubmit();
        }
    };
    const remaining = maxLength - question.length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                        value: question,
                        onChange: (e)=>setQuestion(e.target.value.slice(0, maxLength)),
                        onKeyDown: handleKeyDown,
                        placeholder: "Type your question here...",
                        disabled: disabled || isSubmitting,
                        className: "min-h-24 resize-none pr-16 font-serif bg-card",
                        rows: 3
                    }, void 0, false, {
                        fileName: "[project]/components/audience/question-input.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `absolute bottom-2 right-2 text-xs font-mono ${remaining < 50 ? "text-destructive" : "text-muted-foreground"}`,
                        children: remaining
                    }, void 0, false, {
                        fileName: "[project]/components/audience/question-input.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/audience/question-input.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                onClick: handleSubmit,
                disabled: disabled || isSubmitting || !question.trim(),
                className: "w-full",
                children: isSubmitting ? "Sending..." : "Submit Question"
            }, void 0, false, {
                fileName: "[project]/components/audience/question-input.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-muted-foreground text-center font-mono",
                children: "Press Cmd/Ctrl + Enter to submit"
            }, void 0, false, {
                fileName: "[project]/components/audience/question-input.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/audience/question-input.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_s(QuestionInput, "PyT7Lsu1IM33RzbBffEUS/v5WB0=");
_c = QuestionInput;
var _c;
__turbopack_context__.k.register(_c, "QuestionInput");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/test-data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TEST_SESSION_ID",
    ()=>TEST_SESSION_ID,
    "generateTestAlerts",
    ()=>generateTestAlerts,
    "generateTestInsights",
    ()=>generateTestInsights,
    "generateTestQuestions",
    ()=>generateTestQuestions,
    "generateTestReactionHistory",
    ()=>generateTestReactionHistory,
    "generateTestStats",
    ()=>generateTestStats,
    "generateTestSummary",
    ()=>generateTestSummary,
    "isTestSession",
    ()=>isTestSession,
    "testSession",
    ()=>testSession
]);
const TEST_SESSION_ID = "test";
const testSession = {
    id: TEST_SESSION_ID,
    title: "Demo Presentation: Introduction to AI",
    presenter_id: "test_presenter",
    created_at: new Date().toISOString(),
    is_active: true,
    participant_count: 24
};
function generateTestStats() {
    return {
        speed_up: Math.floor(Math.random() * 8),
        slow_down: Math.floor(Math.random() * 6),
        show_code: Math.floor(Math.random() * 10),
        lost: Math.floor(Math.random() * 5),
        total: Math.floor(Math.random() * 25) + 10,
        window_seconds: 60
    };
}
function generateTestReactionHistory() {
    const now = Date.now();
    const points = [];
    for(let i = 11; i >= 0; i--){
        points.push({
            timestamp: new Date(now - i * 5000).toISOString(),
            speed_up: Math.floor(Math.random() * 4),
            slow_down: Math.floor(Math.random() * 3),
            show_code: Math.floor(Math.random() * 5),
            lost: Math.floor(Math.random() * 2)
        });
    }
    return points;
}
const sampleQuestions = [
    "Can you explain how the neural network architecture works?",
    "What's the difference between supervised and unsupervised learning?",
    "How do you handle overfitting in your models?",
    "Could you show a practical code example?",
    "What are the computational requirements for training?",
    "How does this compare to traditional machine learning?",
    "What datasets did you use for training?",
    "Can you explain the attention mechanism in more detail?"
];
let questionIdCounter = 1;
function generateTestQuestions() {
    return sampleQuestions.slice(0, 5 + Math.floor(Math.random() * 3)).map((text, i)=>({
            id: `q_${questionIdCounter++}`,
            session_id: TEST_SESSION_ID,
            text,
            created_at: new Date(Date.now() - (sampleQuestions.length - i) * 30000).toISOString(),
            is_answered: i < 2,
            sentiment: [
                "positive",
                "neutral",
                "negative"
            ][Math.floor(Math.random() * 3)]
        }));
}
let alertIdCounter = 1;
function generateTestAlerts() {
    const alertTypes = [
        {
            severity: "critical",
            message: "Multiple audience members are lost - consider pausing for clarification"
        },
        {
            severity: "warning",
            message: "Audience is requesting more code examples"
        },
        {
            severity: "info",
            message: "Engagement is high - good pace!"
        }
    ];
    return alertTypes.slice(0, 1 + Math.floor(Math.random() * 2)).map((alert, i)=>({
            id: `alert_${alertIdCounter++}`,
            type: "pacing",
            severity: alert.severity,
            message: alert.message,
            created_at: new Date(Date.now() - i * 60000).toISOString(),
            is_dismissed: false
        }));
}
function generateTestInsights() {
    const pacingRecommendations = [
        "Your pace is well-balanced. The audience is following along nicely.",
        "Consider slowing down slightly - some participants are having trouble keeping up.",
        "The audience seems engaged. You might be able to pick up the pace a bit.",
        "Several 'Show me Code' requests detected. Consider adding a live demo."
    ];
    const questionThemes = [
        {
            theme: "Technical Implementation",
            count: 3,
            examples: [
                "How does the neural network work?",
                "Can you show the code?"
            ]
        },
        {
            theme: "Comparison with Alternatives",
            count: 2,
            examples: [
                "How does this compare to traditional ML?"
            ]
        },
        {
            theme: "Practical Applications",
            count: 2,
            examples: [
                "What are real-world use cases?",
                "How is this used in production?"
            ]
        }
    ];
    return {
        pacing: {
            recommendation: pacingRecommendations[Math.floor(Math.random() * pacingRecommendations.length)],
            confidence: 0.75 + Math.random() * 0.2,
            trend: [
                "stable",
                "speeding_up",
                "slowing_down"
            ][Math.floor(Math.random() * 3)]
        },
        sentiment: {
            overall: [
                "positive",
                "neutral",
                "mixed"
            ][Math.floor(Math.random() * 3)],
            breakdown: {
                interested: 45 + Math.floor(Math.random() * 20),
                confused: 10 + Math.floor(Math.random() * 15),
                frustrated: Math.floor(Math.random() * 10),
                excited: 15 + Math.floor(Math.random() * 15)
            }
        },
        question_themes: questionThemes,
        code_demand: {
            level: [
                "low",
                "medium",
                "high"
            ][Math.floor(Math.random() * 3)],
            suggestion: Math.random() > 0.5 ? "Consider showing a code snippet to address audience requests" : "Code demand is manageable - continue as planned"
        },
        updated_at: new Date().toISOString()
    };
}
function generateTestSummary() {
    return {
        session_id: TEST_SESSION_ID,
        duration_minutes: 45,
        total_participants: 24,
        total_reactions: 87,
        total_questions: 12,
        key_themes: [
            "Neural Network Architecture",
            "Training Methodology",
            "Practical Applications",
            "Performance Optimization"
        ],
        pacing_summary: "The session maintained a good pace overall. There were two brief periods where the audience needed clarification, which were addressed promptly.",
        engagement_score: 78,
        recommendations: [
            "Include more code examples in future sessions",
            "Consider adding a Q&A section mid-presentation",
            "The technical deep-dive section was well-received"
        ],
        generated_at: new Date().toISOString()
    };
}
function isTestSession(sessionId) {
    return sessionId?.toLowerCase() === TEST_SESSION_ID;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/websocket.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WebSocketClient",
    ()=>WebSocketClient,
    "createAudienceWebSocket",
    ()=>createAudienceWebSocket,
    "createPresenterWebSocket",
    ()=>createPresenterWebSocket
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$test$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/test-data.ts [app-client] (ecmascript)");
;
const WS_BASE_URL = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_WS_URL || "ws://localhost:8000";
class TestWebSocketClient {
    messageHandlers = new Set();
    connectHandlers = new Set();
    disconnectHandlers = new Set();
    simulationInterval = null;
    _isConnected = false;
    role;
    constructor(role){
        this.role = role;
    }
    connect() {
        setTimeout(()=>{
            this._isConnected = true;
            this.connectHandlers.forEach((handler)=>handler());
            this.messageHandlers.forEach((handler)=>handler({
                    type: "connection_ack",
                    payload: {
                        participant_count: 24
                    }
                }));
            if (this.role === "presenter") {
                this.startSimulation();
            }
        }, 500);
    }
    startSimulation() {
        this.simulationInterval = setInterval(()=>{
            const random = Math.random();
            if (random < 0.3) {
                this.messageHandlers.forEach((handler)=>handler({
                        type: "stats_update",
                        payload: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$test$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateTestStats"])()
                    }));
            } else if (random < 0.5) {
                this.messageHandlers.forEach((handler)=>handler({
                        type: "reaction",
                        payload: {
                            type: "speed_up"
                        }
                    }));
            } else if (random < 0.6) {
                const alerts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$test$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateTestAlerts"])();
                if (alerts.length > 0) {
                    this.messageHandlers.forEach((handler)=>handler({
                            type: "alert",
                            payload: alerts[0]
                        }));
                }
            } else if (random < 0.7) {
                this.messageHandlers.forEach((handler)=>handler({
                        type: "insights_update",
                        payload: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$test$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateTestInsights"])()
                    }));
            }
        }, 3000);
    }
    send(message) {
        if (this.role === "audience" && message.type === "reaction") {
            setTimeout(()=>{
                this.messageHandlers.forEach((handler)=>handler({
                        type: "reaction_ack",
                        payload: {
                            success: true
                        }
                    }));
            }, 100);
        }
    }
    disconnect() {
        this._isConnected = false;
        if (this.simulationInterval) {
            clearInterval(this.simulationInterval);
            this.simulationInterval = null;
        }
        this.disconnectHandlers.forEach((handler)=>handler());
    }
    onMessage(handler) {
        this.messageHandlers.add(handler);
        return ()=>this.messageHandlers.delete(handler);
    }
    onConnect(handler) {
        this.connectHandlers.add(handler);
        return ()=>this.connectHandlers.delete(handler);
    }
    onDisconnect(handler) {
        this.disconnectHandlers.add(handler);
        return ()=>this.disconnectHandlers.delete(handler);
    }
    get isConnected() {
        return this._isConnected;
    }
    get connectionState() {
        return this._isConnected ? "connected" : "disconnected";
    }
}
class WebSocketClient {
    ws = null;
    url;
    reconnectAttempts = 0;
    maxReconnectAttempts = 10;
    reconnectDelay = 1000;
    messageHandlers = new Set();
    connectHandlers = new Set();
    disconnectHandlers = new Set();
    isIntentionalClose = false;
    messageQueue = [];
    constructor(sessionId, role){
        this.url = `${WS_BASE_URL}/ws?sessionId=${sessionId}&role=${role}`;
    }
    connect() {
        if (this.ws?.readyState === WebSocket.OPEN) return;
        this.isIntentionalClose = false;
        this.ws = new WebSocket(this.url);
        this.ws.onopen = ()=>{
            this.reconnectAttempts = 0;
            this.reconnectDelay = 1000;
            this.connectHandlers.forEach((handler)=>handler());
            this.flushMessageQueue();
        };
        this.ws.onmessage = (event)=>{
            try {
                const message = JSON.parse(event.data);
                this.messageHandlers.forEach((handler)=>handler(message));
            } catch  {}
        };
        this.ws.onclose = ()=>{
            this.disconnectHandlers.forEach((handler)=>handler());
            if (!this.isIntentionalClose) {
                this.attemptReconnect();
            }
        };
        this.ws.onerror = ()=>{};
    }
    attemptReconnect() {
        if (this.reconnectAttempts >= this.maxReconnectAttempts) return;
        this.reconnectAttempts++;
        this.reconnectDelay = Math.min(this.reconnectDelay * 1.5, 30000);
        setTimeout(()=>{
            this.connect();
        }, this.reconnectDelay);
    }
    flushMessageQueue() {
        while(this.messageQueue.length > 0){
            const message = this.messageQueue.shift();
            if (message && this.ws?.readyState === WebSocket.OPEN) {
                this.ws.send(message);
            }
        }
    }
    send(message) {
        const data = JSON.stringify(message);
        if (this.ws?.readyState === WebSocket.OPEN) {
            this.ws.send(data);
        } else {
            this.messageQueue.push(data);
        }
    }
    disconnect() {
        this.isIntentionalClose = true;
        this.ws?.close();
        this.ws = null;
    }
    onMessage(handler) {
        this.messageHandlers.add(handler);
        return ()=>this.messageHandlers.delete(handler);
    }
    onConnect(handler) {
        this.connectHandlers.add(handler);
        return ()=>this.connectHandlers.delete(handler);
    }
    onDisconnect(handler) {
        this.disconnectHandlers.add(handler);
        return ()=>this.disconnectHandlers.delete(handler);
    }
    get isConnected() {
        return this.ws?.readyState === WebSocket.OPEN;
    }
    get connectionState() {
        if (!this.ws) return "disconnected";
        switch(this.ws.readyState){
            case WebSocket.CONNECTING:
                return "connecting";
            case WebSocket.OPEN:
                return "connected";
            default:
                return "disconnected";
        }
    }
}
function createAudienceWebSocket(sessionId) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$test$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTestSession"])(sessionId)) {
        return new TestWebSocketClient("audience");
    }
    return new WebSocketClient(sessionId, "audience");
}
function createPresenterWebSocket(sessionId) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$test$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTestSession"])(sessionId)) {
        return new TestWebSocketClient("presenter");
    }
    return new WebSocketClient(sessionId, "presenter");
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/use-websocket.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useWebSocket",
    ()=>useWebSocket
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$websocket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/websocket.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function useWebSocket({ sessionId, role, onMessage, autoConnect = true }) {
    _s();
    const wsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isConnected, setIsConnected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [connectionState, setConnectionState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("disconnected");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useWebSocket.useEffect": ()=>{
            wsRef.current = role === "audience" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$websocket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAudienceWebSocket"])(sessionId) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$websocket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPresenterWebSocket"])(sessionId);
            const unsubConnect = wsRef.current.onConnect({
                "useWebSocket.useEffect.unsubConnect": ()=>{
                    setIsConnected(true);
                    setConnectionState("connected");
                }
            }["useWebSocket.useEffect.unsubConnect"]);
            const unsubDisconnect = wsRef.current.onDisconnect({
                "useWebSocket.useEffect.unsubDisconnect": ()=>{
                    setIsConnected(false);
                    setConnectionState("disconnected");
                }
            }["useWebSocket.useEffect.unsubDisconnect"]);
            const unsubMessage = onMessage ? wsRef.current.onMessage(onMessage) : undefined;
            if (autoConnect) {
                setConnectionState("connecting");
                wsRef.current.connect();
            }
            return ({
                "useWebSocket.useEffect": ()=>{
                    unsubConnect();
                    unsubDisconnect();
                    unsubMessage?.();
                    wsRef.current?.disconnect();
                }
            })["useWebSocket.useEffect"];
        }
    }["useWebSocket.useEffect"], [
        sessionId,
        role,
        autoConnect
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useWebSocket.useEffect": ()=>{
            if (!wsRef.current || !onMessage) return;
            return wsRef.current.onMessage(onMessage);
        }
    }["useWebSocket.useEffect"], [
        onMessage
    ]);
    const send = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useWebSocket.useCallback[send]": (message)=>{
            wsRef.current?.send(message);
        }
    }["useWebSocket.useCallback[send]"], []);
    const connect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useWebSocket.useCallback[connect]": ()=>{
            setConnectionState("connecting");
            wsRef.current?.connect();
        }
    }["useWebSocket.useCallback[connect]"], []);
    const disconnect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useWebSocket.useCallback[disconnect]": ()=>{
            wsRef.current?.disconnect();
        }
    }["useWebSocket.useCallback[disconnect]"], []);
    return {
        isConnected,
        connectionState,
        send,
        connect,
        disconnect
    };
}
_s(useWebSocket, "B8EY6p4DLWqA8wn68XtyKaBka9Y=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "questionAPI",
    ()=>questionAPI,
    "reactionAPI",
    ()=>reactionAPI,
    "sessionAPI",
    ()=>sessionAPI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$test$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/test-data.ts [app-client] (ecmascript)");
;
const API_BASE_URL = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
async function fetchAPI(endpoint, options) {
    const url = `${API_BASE_URL}${endpoint}`;
    const response = await fetch(url, {
        ...options,
        headers: {
            "Content-Type": "application/json",
            ...options?.headers
        }
    });
    if (!response.ok) {
        const error = await response.json().catch(()=>({
                detail: "Request failed"
            }));
        throw new Error(error.detail || `HTTP ${response.status}`);
    }
    return response.json();
}
const sessionAPI = {
    create: (data)=>{
        if (data.title.toLowerCase() === "test") {
            return Promise.resolve({
                ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$test$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["testSession"],
                created_at: new Date().toISOString()
            });
        }
        return fetchAPI("/api/session/create", {
            method: "POST",
            body: JSON.stringify(data)
        });
    },
    get: (sessionId)=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$test$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTestSession"])(sessionId)) {
            return Promise.resolve({
                ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$test$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["testSession"],
                created_at: new Date().toISOString()
            });
        }
        return fetchAPI(`/api/session/${sessionId}`);
    },
    end: (sessionId)=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$test$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTestSession"])(sessionId)) {
            return Promise.resolve({
                success: true
            });
        }
        return fetchAPI(`/api/session/${sessionId}/end`, {
            method: "POST"
        });
    },
    getStats: (sessionId)=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$test$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTestSession"])(sessionId)) {
            return Promise.resolve((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$test$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateTestStats"])());
        }
        return fetchAPI(`/api/session/${sessionId}/stats`);
    },
    getReactionHistory: (sessionId, windowSeconds)=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$test$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTestSession"])(sessionId)) {
            return Promise.resolve((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$test$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateTestReactionHistory"])());
        }
        return fetchAPI(`/api/session/${sessionId}/reactions/history${windowSeconds ? `?window=${windowSeconds}` : ""}`);
    },
    getQuestions: (sessionId, unansweredOnly)=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$test$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTestSession"])(sessionId)) {
            return Promise.resolve((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$test$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateTestQuestions"])());
        }
        return fetchAPI(`/api/session/${sessionId}/questions${unansweredOnly ? "?unanswered=true" : ""}`);
    },
    getInsights: (sessionId)=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$test$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTestSession"])(sessionId)) {
            return Promise.resolve((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$test$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateTestInsights"])());
        }
        return fetchAPI(`/api/session/${sessionId}/insights`);
    },
    getAlerts: (sessionId)=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$test$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTestSession"])(sessionId)) {
            return Promise.resolve((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$test$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateTestAlerts"])());
        }
        return fetchAPI(`/api/session/${sessionId}/alerts`);
    },
    getSummary: (sessionId)=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$test$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTestSession"])(sessionId)) {
            return Promise.resolve((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$test$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateTestSummary"])());
        }
        return fetchAPI(`/api/session/${sessionId}/summary`);
    },
    dismissAlert: (sessionId, alertId)=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$test$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTestSession"])(sessionId)) {
            return Promise.resolve({
                success: true
            });
        }
        return fetchAPI(`/api/session/${sessionId}/alerts/${alertId}/dismiss`, {
            method: "POST"
        });
    },
    markQuestionAnswered: (sessionId, questionId)=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$test$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTestSession"])(sessionId)) {
            return Promise.resolve({
                success: true
            });
        }
        return fetchAPI(`/api/session/${sessionId}/questions/${questionId}/answered`, {
            method: "POST"
        });
    }
};
const reactionAPI = {
    submit: (data)=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$test$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTestSession"])(data.session_id)) {
            return Promise.resolve({
                success: true
            });
        }
        return fetchAPI("/api/reactions", {
            method: "POST",
            body: JSON.stringify(data)
        });
    }
};
const questionAPI = {
    submit: (data)=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$test$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTestSession"])(data.session_id)) {
            return Promise.resolve({
                id: `q_${Date.now()}`,
                session_id: data.session_id,
                text: data.text,
                created_at: new Date().toISOString(),
                is_answered: false
            });
        }
        return fetchAPI("/api/questions", {
            method: "POST",
            body: JSON.stringify(data)
        });
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/audience/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AudiencePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$audience$2f$session$2d$join$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/audience/session-join.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$audience$2f$connection$2d$status$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/audience/connection-status.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$audience$2f$reaction$2d$buttons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/audience/reaction-buttons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$audience$2f$question$2d$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/audience/question-input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$theme$2d$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/theme-toggle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$websocket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-websocket.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
function AudiencePage() {
    _s();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const initialSessionId = searchParams.get("session");
    const [sessionId, setSessionId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialSessionId);
    const [session, setSession] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [joinError, setJoinError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [reactionFeedback, setReactionFeedback] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AudiencePage.useCallback[handleMessage]": (message)=>{
            if (message.type === "connection_ack") {
                const payload = message.payload;
            }
        }
    }["AudiencePage.useCallback[handleMessage]"], []);
    const { connectionState, isConnected, send } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$websocket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWebSocket"])({
        sessionId: sessionId || "",
        role: "audience",
        onMessage: handleMessage,
        autoConnect: !!sessionId && !!session
    });
    const handleJoinSession = async (id)=>{
        setIsLoading(true);
        setJoinError(null);
        try {
            const sessionData = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sessionAPI"].get(id);
            if (!sessionData.is_active) {
                setJoinError("This session has ended");
                return;
            }
            setSession(sessionData);
            setSessionId(id);
            const url = new URL(window.location.href);
            url.searchParams.set("session", id);
            window.history.replaceState({}, "", url.toString());
        } catch  {
            setJoinError("Session not found. Please check the code and try again.");
        } finally{
            setIsLoading(false);
        }
    };
    const handleReaction = async (type)=>{
        if (!sessionId) return;
        const feedbackMessages = {
            speed_up: "Sent: Speed up request",
            slow_down: "Sent: Slow down request",
            show_code: "Sent: Show code request",
            lost: "Sent: Need clarification"
        };
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reactionAPI"].submit({
                session_id: sessionId,
                type
            });
            send({
                type: "reaction",
                payload: {
                    type,
                    session_id: sessionId
                }
            });
            setReactionFeedback(feedbackMessages[type]);
            setTimeout(()=>setReactionFeedback(null), 2000);
        } catch  {
            setReactionFeedback("Failed to send reaction");
            setTimeout(()=>setReactionFeedback(null), 2000);
        }
    };
    const handleQuestion = async (text)=>{
        if (!sessionId) return;
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["questionAPI"].submit({
            session_id: sessionId,
            text
        });
        send({
            type: "question",
            payload: {
                text,
                session_id: sessionId
            }
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AudiencePage.useEffect": ()=>{
            if (initialSessionId && !session) {
                handleJoinSession(initialSessionId);
            }
        }
    }["AudiencePage.useEffect"], [
        initialSessionId
    ]);
    if (!sessionId || !session) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$audience$2f$session$2d$join$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SessionJoin"], {
            onJoin: handleJoinSession,
            error: joinError
        }, void 0, false, {
            fileName: "[project]/app/audience/page.tsx",
            lineNumber: 111,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-background p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-lg mx-auto space-y-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-lg font-serif font-semibold text-foreground",
                                    children: session.title
                                }, void 0, false, {
                                    fileName: "[project]/app/audience/page.tsx",
                                    lineNumber: 119,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-muted-foreground font-mono",
                                    children: [
                                        "Session: ",
                                        sessionId
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/audience/page.tsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/audience/page.tsx",
                            lineNumber: 118,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$theme$2d$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeToggle"], {}, void 0, false, {
                                    fileName: "[project]/app/audience/page.tsx",
                                    lineNumber: 123,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$audience$2f$connection$2d$status$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionStatus"], {
                                    state: connectionState
                                }, void 0, false, {
                                    fileName: "[project]/app/audience/page.tsx",
                                    lineNumber: 124,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/audience/page.tsx",
                            lineNumber: 122,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/audience/page.tsx",
                    lineNumber: 117,
                    columnNumber: 9
                }, this),
                reactionFeedback && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-primary/10 border border-primary/30 rounded-sm px-4 py-2 text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm text-primary font-medium",
                        children: reactionFeedback
                    }, void 0, false, {
                        fileName: "[project]/app/audience/page.tsx",
                        lineNumber: 130,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/audience/page.tsx",
                    lineNumber: 129,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                    className: "border-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                            className: "pb-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                className: "text-base font-serif",
                                children: "How is the pace?"
                            }, void 0, false, {
                                fileName: "[project]/app/audience/page.tsx",
                                lineNumber: 136,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/audience/page.tsx",
                            lineNumber: 135,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$audience$2f$reaction$2d$buttons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReactionButtons"], {
                                onReaction: handleReaction,
                                disabled: !isConnected
                            }, void 0, false, {
                                fileName: "[project]/app/audience/page.tsx",
                                lineNumber: 139,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/audience/page.tsx",
                            lineNumber: 138,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/audience/page.tsx",
                    lineNumber: 134,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                    className: "border-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                            className: "pb-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                className: "text-base font-serif",
                                children: "Have a question?"
                            }, void 0, false, {
                                fileName: "[project]/app/audience/page.tsx",
                                lineNumber: 145,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/audience/page.tsx",
                            lineNumber: 144,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$audience$2f$question$2d$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QuestionInput"], {
                                onSubmit: handleQuestion,
                                disabled: !isConnected
                            }, void 0, false, {
                                fileName: "[project]/app/audience/page.tsx",
                                lineNumber: 148,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/audience/page.tsx",
                            lineNumber: 147,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/audience/page.tsx",
                    lineNumber: 143,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                    className: "text-center pt-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-muted-foreground",
                        children: "Your feedback helps the presenter adjust in real-time"
                    }, void 0, false, {
                        fileName: "[project]/app/audience/page.tsx",
                        lineNumber: 153,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/audience/page.tsx",
                    lineNumber: 152,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/audience/page.tsx",
            lineNumber: 116,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/audience/page.tsx",
        lineNumber: 115,
        columnNumber: 5
    }, this);
}
_s(AudiencePage, "valW0gCib/Rq1LkJTyesUdDG4LI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$websocket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWebSocket"]
    ];
});
_c = AudiencePage;
var _c;
__turbopack_context__.k.register(_c, "AudiencePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_287f2926._.js.map