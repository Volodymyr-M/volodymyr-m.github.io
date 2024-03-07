---
layout: text
title: Open Ingantt
---

Click "**Open Ingantt**" in the dialog that you see to sign in Ingantt to Google.

If the dialog is not opened for you automatically, click the link below.

<p><a href="#" onclick="redirectToDesktop()">Click to Sign in Ingantt to Google account</a></p>

<script type="text/javascript">
    function redirectToDesktop() {
      const url = window.location.href.split('#');
      const appLinkScheme = "ingantt-scheme";
      const appLinkAuthority = "ingantt.com";
      const appLinkUrl = `${appLinkScheme}://${appLinkAuthority}/google-auth?` + url[1];
      setTimeout(() => {
        window.location.href = appLinkUrl;
      }, 100);
      return false;
    }
    window.onload = redirectToDesktop();
</script>
