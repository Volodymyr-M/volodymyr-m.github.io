---
layout: text
title: Open Ingantt
---

Click "**Open Ingantt**" in the dialog that you see to sign in Ingantt to Google.

Click the link below if:

* If the dialog is not opened for you automatically.
* If Ingantt is not refreshed with the list of your projects after all the above.

<p><a href="#" onclick="redirectToDesktop()">Click to Sign in Ingantt to Google account</a></p>

<script type="text/javascript">
    var appLinkUrl = '';
    function redirectToDesktop() {
      if (appLinkUrl == '') {
        const url = window.location.href.split('#');
        const appLinkScheme = "ingantt-scheme";
        const appLinkAuthority = "ingantt.com";
        appLinkUrl = `${appLinkScheme}://${appLinkAuthority}/google-auth?` + url[1];
      }
      setTimeout(() => {
        window.location.href = appLinkUrl;
      }, 100);
      return false;
    }
    window.onload = redirectToDesktop();
</script>
