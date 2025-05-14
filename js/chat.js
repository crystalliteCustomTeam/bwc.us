// window.__lc = window.__lc || {};
// window.__lc.license = 19030650;
// window.__lc.integration_name = "manual_onboarding";
// window.__lc.product_name = "livechat";
// ; (function (n, t, c) { function i(n) { return e._h ? e._h.apply(null, n) : e._q.push(n) } var e = { _q: [], _h: null, _v: "2.0", on: function () { i(["on", c.call(arguments)]) }, once: function () { i(["once", c.call(arguments)]) }, off: function () { i(["off", c.call(arguments)]) }, get: function () { if (!e._h) throw new Error("[LiveChatWidget] You can't use getters before load."); return i(["get", c.call(arguments)]) }, call: function () { i(["call", c.call(arguments)]) }, init: function () { var n = t.createElement("script"); n.async = !0, n.type = "text/javascript", n.src = "https://cdn.livechatinc.com/tracking.js", t.head.appendChild(n) } }; !n.__lc.asyncInit && e.init(), n.LiveChatWidget = n.LiveChatWidget || e }(window, document, [].slice))

var Tawk_API = Tawk_API || {},
  Tawk_LoadStart = new Date();
(function () {
  var s1 = document.createElement("script"),
    s0 = document.getElementsByTagName("script")[0];
  s1.async = true;
  s1.src = "https://embed.tawk.to/6824d1e0cc21d9190ec4265d/1ir7t7m52";
  s1.charset = "UTF-8";
  s1.setAttribute("crossorigin", "*");
  s0.parentNode.insertBefore(s1, s0);
})();

// Replace tawk.to link with LiveChat action
Array.from(document.links).forEach((link) => {
  if (link.getAttribute("onclick") === "parent.LC_API.open_chat_window(); return false;") {
    link.setAttribute("href", "javascript:void(Tawk_API.toggle())");
    // link.setAttribute("onclick", "parent.LC_API.open_chat_window(); return false;");
  }
});

// Get IP Address and handle form
let client_ip;

fetch("https://api.ipify.org?format=json")
  .then((res) => res.json())
  .then((data) => (client_ip = data.ip));

$("form").submit(async function (e) {
  e.preventDefault();

  const formData = new FormData($(this)[0]); // fix here
  const formObj = Object.fromEntries(formData.entries()); // now this works

  try {
    const ipRes = await fetch("https://api.ipify.org?format=json");
    const ipData = await ipRes.json();

    const dataToSend = {
      page_url: window.location.href,
      user_ip: ipData.ip,
      lead_data: formObj,
    };

    $("form button").prop("disabled", true).html(`
                <div class="container text-center">
                    <div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div>
                </div>
            `);

    $.ajax({
      url: "https://brandsapi.pulse-force.com/api/v1/leads",
      type: "POST",
      data: JSON.stringify(dataToSend),
      contentType: "application/json",
      success: function () {
        window.location.href = "/thank-you.html";
      },
      error: function (err) {
        console.error("Submission failed:", err);
      },
    });
  } catch (err) {
    console.error("Something went wrong:", err);
  }
});
