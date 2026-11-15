module.exports = [
"[externals]/node:fs/promises [external] (node:fs/promises, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:fs/promises", () => require("node:fs/promises"));

module.exports = mod;
}),
"[externals]/node:path [external] (node:path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:path", () => require("node:path"));

module.exports = mod;
}),
"[project]/Case---Next.js/Case - Next.js/lib/storage.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addTicket",
    ()=>addTicket,
    "getTickets",
    ()=>getTickets
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:fs/promises [external] (node:fs/promises, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
;
;
const filePath = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(process.cwd(), "data", "tickets.json");
async function readTickets() {
    const fileContent = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["readFile"])(filePath, "utf-8");
    return JSON.parse(fileContent);
}
async function getTickets() {
    await new Promise((resolve)=>setTimeout(resolve, 1800));
    return readTickets();
}
async function addTicket(newTicketData) {
    const tickets = await readTickets();
    const newTicket = {
        id: `tkt-${Date.now()}`,
        title: newTicketData.title,
        description: newTicketData.description,
        status: "Aberto",
        createdAt: new Date().toISOString()
    };
    tickets.unshift(newTicket);
    await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["writeFile"])(filePath, JSON.stringify(tickets, null, 2), "utf-8");
}
}),
"[project]/Case---Next.js/Case - Next.js/actions/tickets.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40ec7532cf025b78a210bcc15d68b1b096ae34add8":{"name":"createTicket"}},"Case---Next.js/Case - Next.js/actions/tickets.ts",""] */ __turbopack_context__.s([
    "createTicket",
    ()=>createTicket
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Case$2d2d2d$Next$2e$js$2f$Case__$2d$__Next$2e$js$2f$lib$2f$storage$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Case---Next.js/Case - Next.js/lib/storage.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
async function createTicket(formData) {
    const title = String(formData.get("title"));
    const description = String(formData.get("description"));
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Case$2d2d2d$Next$2e$js$2f$Case__$2d$__Next$2e$js$2f$lib$2f$storage$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addTicket"])({
        title,
        description
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/");
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    createTicket
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createTicket, "40ec7532cf025b78a210bcc15d68b1b096ae34add8", null);
}),
"[project]/Case---Next.js/Case - Next.js/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/Case---Next.js/Case - Next.js/actions/tickets.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Case$2d2d2d$Next$2e$js$2f$Case__$2d$__Next$2e$js$2f$actions$2f$tickets$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Case---Next.js/Case - Next.js/actions/tickets.ts [app-rsc] (ecmascript)");
;
}),
"[project]/Case---Next.js/Case - Next.js/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/Case---Next.js/Case - Next.js/actions/tickets.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "40ec7532cf025b78a210bcc15d68b1b096ae34add8",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Case$2d2d2d$Next$2e$js$2f$Case__$2d$__Next$2e$js$2f$actions$2f$tickets$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createTicket"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Case$2d2d2d$Next$2e$js$2f$Case__$2d$__Next$2e$js$2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$Case$2d2d2d$Next$2e$js$2f$Case__$2d$__Next$2e$js$2f$actions$2f$tickets$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/Case---Next.js/Case - Next.js/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => "[project]/Case---Next.js/Case - Next.js/actions/tickets.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$Case$2d2d2d$Next$2e$js$2f$Case__$2d$__Next$2e$js$2f$actions$2f$tickets$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Case---Next.js/Case - Next.js/actions/tickets.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__13s2~r~._.js.map