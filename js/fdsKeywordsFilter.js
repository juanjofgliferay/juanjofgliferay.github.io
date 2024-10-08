var e = {
    d: (t, n) => {
        for (var a in n)
            e.o(n, a) && !e.o(t, a) && Object.defineProperty(t, a, {
                enumerable: !0,
                get: n[a]
            })
    }
    ,
    o: (e, t) => Object.prototype.hasOwnProperty.call(e, t)
}
  , t = {};
e.d(t, {
    c: () => n
});
const n = {
    descriptionBuilder: function(e) {
        return e
    },
    htmlElementBuilder: function({fieldName: e, filter: t, setFilter: n}) {
        const a = document.createElement("input");
        t.selectedData && (a.value = t.selectedData),
        a.className = "form-control",
        a.placeholder = `Search by ${e}`;
        const o = document.createElement("button");
        o.className = "btn btn-block btn-secondary btn-sm mt-2",
        o.innerText = "Submit",
        o.onclick = () => n({
            selectedData: `${e}/any(k:contains(k, '${a.value}'))`
        });
        const c = document.createElement("div");
        return c.className = "dropdown-item",
        c.appendChild(a),
        c.appendChild(o),
        c
    },
    oDataQueryBuilder: function(e) {
        return e
    }
};
var a = t.c;
export {a as default};