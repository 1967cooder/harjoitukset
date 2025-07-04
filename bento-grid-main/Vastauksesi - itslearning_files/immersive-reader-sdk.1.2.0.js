!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ImmersiveReader=t():e.ImmersiveReader=t()}(self,(function(){return(()=>{"use strict";var e={150:(e,t)=>{var r;Object.defineProperty(t,"__esModule",{value:!0}),t.ErrorCode=void 0,(r=t.ErrorCode||(t.ErrorCode={})).BadArgument="BadArgument",r.Timeout="Timeout",r.TokenExpired="TokenExpired",r.Throttled="Throttled",r.ServerError="ServerError",r.InvalidSubdomain="InvalidSubdomain"},925:function(e,t,r){var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},n.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.isValidSubdomain=t.close=t.launchAsync=void 0;var i=r(411),a=r(150),o="ImmersiveReader-Preferences:",s="ImmersiveReader-LaunchResponse:",d={};d[a.ErrorCode.TokenExpired]="The access token supplied is expired.",d[a.ErrorCode.Throttled]="You have exceeded your quota.",d[a.ErrorCode.ServerError]="An error occurred when calling the server to process the text.",d[a.ErrorCode.InvalidSubdomain]="The subdomain supplied is invalid.";var l=!1;function u(e){return!!e&&new RegExp("^([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\\-]{0,61}[a-zA-Z0-9])$").test(e)}t.launchAsync=function(e,t,r,c){return l?Promise.reject("Immersive Reader is already launching"):new Promise((function(m,p){if(e)if(r)if(r.chunks)if(r.chunks.length)if(u(t)||c&&c.customDomain){l=!0;var h=Date.now();(c=n({uiZIndex:1e3,timeout:15e3,useWebview:!1,allowFullscreen:!0,hideExitButton:!1,cookiePolicy:i.CookiePolicy.Disable},c)).uiZIndex&&"number"==typeof c.uiZIndex||(c.uiZIndex=1e3);var v=null,b=document.createElement("div"),g=c.useWebview?document.createElement("webview"):document.createElement("iframe");g.allow="autoplay",g.title="Immersive Reader Frame",g.setAttribute("aria-modal","true");var f=document.createElement("style");f.innerHTML="body{height:100%;overflow:hidden;}";var y=function(){v&&(window.clearTimeout(v),v=null)},k=c.parent&&document.contains(c.parent)?c.parent:document.body,w=function(){k.contains(b)&&k.removeChild(b),window.removeEventListener("message",x),y(),f.parentNode&&f.parentNode.removeChild(f)},E=function(){if(w(),l=!1,c.onExit)try{c.onExit()}catch(e){}};w();var x=function(n){if(n&&n.data&&"string"==typeof n.data)if("ImmersiveReader-ReadyForContent"===n.data){y();var i={cogSvcsAccessToken:e,cogSvcsSubdomain:t,request:r,launchToPostMessageSentDurationInMs:Date.now()-h,disableFirstRun:c.disableFirstRun,readAloudOptions:c.readAloudOptions,translationOptions:c.translationOptions,displayOptions:c.displayOptions,sendPreferences:!!c.onPreferencesChanged,preferences:c.preferences,disableTranslation:c.disableTranslation,disableGrammar:c.disableGrammar,disableLanguageDetection:c.disableLanguageDetection};g.contentWindow.postMessage(JSON.stringify({messageType:"Content",messageValue:i}),"*")}else if("ImmersiveReader-Exit"===n.data)E();else if(n.data.startsWith(s)){var u=null,v=null,f=null;try{f=JSON.parse(n.data.substring(s.length))}catch(e){}f&&f.success?u={container:b,sessionId:f.sessionId,charactersProcessed:f.meteredContentSize}:v=f&&!f.success?{code:f.errorCode,message:d[f.errorCode],sessionId:f.sessionId}:{code:a.ErrorCode.ServerError,message:d[a.ErrorCode.ServerError]},l=!1,u?(y(),m(u)):v&&(E(),p(v))}else if(n.data.startsWith(o)&&c.onPreferencesChanged&&"function"==typeof c.onPreferencesChanged)try{c.onPreferencesChanged(n.data.substring(o.length))}catch(e){}};window.addEventListener("message",x),v=window.setTimeout((function(){w(),l=!1,p({code:a.ErrorCode.Timeout,message:"Page failed to load after timeout ("+c.timeout+" ms)"})}),c.timeout),c.allowFullscreen&&g.setAttribute("allowfullscreen",""),g.style.cssText=c.parent?"position: static; width: 100%; height: 100%; left: 0; top: 0; border-width: 0":"position: static; width: 100vw; height: 100vh; left: 0; top: 0; border-width: 0",c.useWebview&&g.addEventListener("loadstop",(function(){g.contentWindow.postMessage(JSON.stringify({messageType:"WebviewHost"}),"*")}));var C=(c.customDomain?c.customDomain:"https://"+t+".cognitiveservices.azure.com/immersivereader/webapp/v1.0/")+"reader?exitCallback=ImmersiveReader-Exit&sdkPlatform=js&sdkVersion=1.2.0";C+="&cookiePolicy="+(c.cookiePolicy===i.CookiePolicy.Enable?"enable":"disable"),c.hideExitButton&&(C+="&hideExitButton=true"),c.uiLang&&(C+="&omkt="+c.uiLang),g.src=C,b.style.cssText=c.parent?"position: relative; width: 100%; height: 100%; border-width: 0; -webkit-perspective: 1px; z-index: "+c.uiZIndex+"; background: white; overflow: hidden":"position: fixed; width: 100vw; height: 100vh; left: 0; top: 0; border-width: 0; -webkit-perspective: 1px; z-index: "+c.uiZIndex+"; background: white; overflow: hidden",b.appendChild(g),k.appendChild(b),document.head.appendChild(f)}else p({code:a.ErrorCode.InvalidSubdomain,message:d[a.ErrorCode.InvalidSubdomain]});else p({code:a.ErrorCode.BadArgument,message:"Chunks must not be empty"});else p({code:a.ErrorCode.BadArgument,message:"Chunks must not be null"});else p({code:a.ErrorCode.BadArgument,message:"Content must not be null"});else p({code:a.ErrorCode.BadArgument,message:"Token must not be null"})}))},t.close=function(){window.postMessage("ImmersiveReader-Exit","*")},t.isValidSubdomain=u},411:(e,t)=>{var r,n;Object.defineProperty(t,"__esModule",{value:!0}),t.ThemeOption=t.CookiePolicy=void 0,(n=t.CookiePolicy||(t.CookiePolicy={}))[n.Disable=0]="Disable",n[n.Enable=1]="Enable",(r=t.ThemeOption||(t.ThemeOption={}))[r.Light=0]="Light",r[r.Dark=1]="Dark"},848:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.renderButtons=void 0;var r="data-locale",n={af:"Indompelende leser",am:"በህያው ስሜት ፈጣሪ ዕይታ አንባቢ",ar:"القارئ الشامل",as:"ইমাৰচিভ ৰিডাৰ",az:"İmmersiv Oxuyucu",be:"Імерсіўны чытальнік",bg:"Концентриран четец",bn:"মনোগ্রাহী পাঠক","bn-bd":"ইমার্সিভ পাঠক",bs:"Koncentrirani čitalac",ca:"Lector immersiu",cs:"Asistivní čtečka","cy-gb":"Darllenydd Ymdrwythol",da:"Forenklet læser",de:"Plastischer Reader",el:"Προηγμένο πρόγραμμα ανάγνωσης",en:"Immersive Reader",es:"Lector inmersivo",et:"Süvaluger",eu:"Irakurgailu murgiltzailea",fa:"خواننده همه‌جانبه",fi:"Syventävä lukuohjelma",fil:"Immersive Reader",fr:"Lecteur immersif","ga-ie":"Léitheoir tumthach",gd:"An leughadair ùr-nòsach",gl:"Lector avanzado",gu:"ઇમર્સિવ રીડર",ha:"Mai karatu Mai barbazawa",he:"תצוגת קריאה מודרנית",hi:"इमर्सिव रीडर",hr:"Stopljeni čitač",hu:"Modern olvasó",hy:"Խորասուզված ընթերցիչ",id:"Pembaca Imersif",ig:"Ọgụụ Kenzipụtara",is:"Aðgengilegt lestrarumhverfi",it:"Strumento di lettura immersiva",ja:"イマーシブ リーダー",ka:"იმერსიული წამკითხველი",kk:"Иммерсивті оқу құралы",km:"កម្មវិធីអានពណ៌រំលេចនៅលើអេក្រង់",kn:"ಇಮ್ಮರ್ಸಿವ್ ಓದುಗ",ko:"몰입형 리더",kok:"तंद्री लागिल्लो वाचक","ku-arab":"خوێنەری پڕ",ky:"Курчаган Окугуч",lb:"Immersive Reader",lo:"ຕົວອ່ານອິມເມີສີບ",lt:"Įtraukianti skaitytuvė",lv:"Tīrskata lasītājs",mi:"Pūpānui Rumaki",mk:"Сеопфатен читач",ml:"ഇമ്മേഴ്‌സീവ് റീഡർ",mn:"Идэвхтэй уншигч",mr:"इमर्सिव्ह वाचक",ms:"Pembaca Imersif",mt:"Qarrej Immersiv",ne:"इमेर्सिभ रिडर",nl:"Insluitende lezer","nn-no":"Engasjerande lesar",no:"Engasjerende leser",nso:"Go Bala ka Mongwalo o Mokoto",or:"ଇମରସିଭ୍ ରିଡର୍",pa:"ਇਮਰਸਿਵ ਰੀਡਰ","pa-arab":"گھیرن آلا مطالعہ کار",pl:"Czytnik immersyjny",prs:"خواننده نمایش",pt:"Leitura Avançada",quc:"Nim ucholajil sik'inel uwach",quz:"Wankisqa Ñawiq",ro:"Immersive Reader",ru:"Иммерсивное средство чтения",rw:"Insakazasoma",sd:"امرسو ريڊر",si:"ගිලෙන සුළු කියවනය",sk:"Imerzná čítačka",sl:"Potopni bralnik",sq:"Lexuesi kredhës","sr-cyrl-ba":"Концентрисани читалац","sr-cyrl-rs":"Концентрисани читалац","sr-latn-rs":"Koncentrisani čitalac",sv:"Avancerad läsare",sw:"Kisomaji cha Kuzamisha",ta:"அற்புதமான ரீடர்",te:"మంత్రముగ్ధులను చేసే పఠన సాధనం","tg-cyrl-tj":"Хонандаи фарогир",th:"โปรแกรมช่วยอ่าน",ti:"ኣንባቢ ሕሉው ስምዒት ፈጣሪ",tk:"Giňişleýin okaýjy",tn:"Sebadi sa Imesife",tr:"Tam Ekran Okuyucu",tt:"Чолгап алучы уку чарасы","ug-cn":"چۆكمە ئوقۇغۇچ",uk:"Занурення в текст",ur:"امرسیو مطالعہ کار",uz:"Immersiv mutolaa vositasi",vi:"Trình đọc Chân thực",wo:"Jàngukaay bu Rafet",xh:"Isifundi Esikhulu",yo:"Ìwò Alámùtán",zh:"沉浸式阅读器","zh-hant":"沈浸式閱讀程式",zu:"Isifundi Sokuzizwisa"};function i(e){var t=document.createElement("img");t.src="https://ircdname.azureedge.net/permanent-static-resources/immersive-reader-icon.svg";var n=e.getAttribute("data-icon-px-size")||"20";t.style.height=t.style.width=n+"px",t.style.verticalAlign="middle",t.style.marginTop="-2px";var i=e.getAttribute(r)||"en";t.alt=s(i),e.appendChild(t)}function a(e){var t=document.createElement("span");t.style.marginLeft="8px",e.appendChild(t)}function o(e){var t=document.createElement("span"),n=e.getAttribute(r)||"en";t.textContent=s(n),e.appendChild(t)}function s(e){return e=e.toLowerCase(),n[e]?n[e]:"zh-hk"===e||"zh-mo"===e||"zh-tw"===e?n["zh-hant"]:(e=e.substring(0,e.lastIndexOf("-")),n[e]?n[e]:(e=e.substring(0,e.lastIndexOf("-")),n[e]?n[e]:n.en))}t.renderButtons=function(e){var t=document.createElement("style");t.innerHTML=".immersive-reader-button{cursor:pointer;display:inline-block;padding:5px;} .immersive-reader-button:hover{background:rgba(0,0,0,.05);border-radius:2px",document.head.appendChild(t);var n=[].slice.call(document.getElementsByClassName("immersive-reader-button"));e&&e.elements&&(n=e.elements);for(var d=0,l=n;d<l.length;d++){var u=l[d];u.setAttribute("role","button");var c=u.getAttribute(r)||"en";switch(u.setAttribute("aria-label",s(c)),u.textContent="",u.getAttribute("data-button-style")||"icon"){case"icon":i(u);break;case"text":o(u);break;case"iconAndText":i(u),a(u),o(u)}}}}},t={};function r(n){var i=t[n];if(void 0!==i)return i.exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,r),a.exports}var n={};return(()=>{var e=n;Object.defineProperty(e,"__esModule",{value:!0}),e.CookiePolicy=e.launchAsync=e.close=e.renderButtons=void 0;var t=r(848);Object.defineProperty(e,"renderButtons",{enumerable:!0,get:function(){return t.renderButtons}});var i=r(925);Object.defineProperty(e,"close",{enumerable:!0,get:function(){return i.close}}),Object.defineProperty(e,"launchAsync",{enumerable:!0,get:function(){return i.launchAsync}});var a=r(411);Object.defineProperty(e,"CookiePolicy",{enumerable:!0,get:function(){return a.CookiePolicy}}),"undefined"!=typeof window&&window.addEventListener("load",(function(){var e;window.hasOwnProperty("Promise")||("https://ircdname.azureedge.net/permanent-static-resources/promise-polyfill.min.js",(e=document.createElement("script")).src="https://ircdname.azureedge.net/permanent-static-resources/promise-polyfill.min.js",document.head.appendChild(e)),t.renderButtons()}))})(),n})()}));
// SIG // Begin signature block
// SIG // MIInRwYJKoZIhvcNAQcCoIInODCCJzQCAQExDzANBglg
// SIG // hkgBZQMEAgEFADB3BgorBgEEAYI3AgEEoGkwZzAyBgor
// SIG // BgEEAYI3AgEeMCQCAQEEEBDgyQbOONQRoqMAEEvTUJAC
// SIG // AQACAQACAQACAQACAQAwMTANBglghkgBZQMEAgEFAAQg
// SIG // 25HgbqYC/cgu8lTLhCFNAtDxIVxEr3m6XkWSRy/fkH6g
// SIG // ghF5MIIIiTCCB3GgAwIBAgITNgAAAX7/b/0EpCVYEgAC
// SIG // AAABfjANBgkqhkiG9w0BAQsFADBBMRMwEQYKCZImiZPy
// SIG // LGQBGRYDR0JMMRMwEQYKCZImiZPyLGQBGRYDQU1FMRUw
// SIG // EwYDVQQDEwxBTUUgQ1MgQ0EgMDEwHhcNMjEwOTA5MDEy
// SIG // NjI2WhcNMjIwOTA5MDEyNjI2WjAkMSIwIAYDVQQDExlN
// SIG // aWNyb3NvZnQgQXp1cmUgQ29kZSBTaWduMIIBIjANBgkq
// SIG // hkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAkIdczHOhlavX
// SIG // 8oArJKfzvYOo0tIpSd4nZs/tiZBPvQGqzNAIidfwg0BE
// SIG // 0l+eiTofVZvJHX343aiXw9jaEldpTtXigBShEysoiSr2
// SIG // 3Ft/B+yYR9YfsggY2o4lssHAGf4qUV97DGDOZ15efhsR
// SIG // GaRkGyyLKy49uGYvXY9pHR3NA8am3ps5Qskogfp/axxX
// SIG // YvcxJ+l87k3/94ulzN+pVD2fsbemXJLqbtAgJ7uHWa9V
// SIG // 4sB72yb6qt0XFzlOY6dZvwCpODr/vY2hCjp2IhyW56Qv
// SIG // rysf2b/GmWo4T8lWN312/7coBjsm+tOxGJ+xdr+AHCS+
// SIG // aHD009wRlrb3tSrjsEUbNwIDAQABo4IFlTCCBZEwKQYJ
// SIG // KwYBBAGCNxUKBBwwGjAMBgorBgEEAYI3WwEBMAoGCCsG
// SIG // AQUFBwMDMD0GCSsGAQQBgjcVBwQwMC4GJisGAQQBgjcV
// SIG // CIaQ4w2E1bR4hPGLPoWb3RbOnRKBYIPdzWaGlIwyAgFk
// SIG // AgEMMIICdgYIKwYBBQUHAQEEggJoMIICZDBiBggrBgEF
// SIG // BQcwAoZWaHR0cDovL2NybC5taWNyb3NvZnQuY29tL3Br
// SIG // aWluZnJhL0NlcnRzL0JZMlBLSUNTQ0EwMS5BTUUuR0JM
// SIG // X0FNRSUyMENTJTIwQ0ElMjAwMSgyKS5jcnQwUgYIKwYB
// SIG // BQUHMAKGRmh0dHA6Ly9jcmwxLmFtZS5nYmwvYWlhL0JZ
// SIG // MlBLSUNTQ0EwMS5BTUUuR0JMX0FNRSUyMENTJTIwQ0El
// SIG // MjAwMSgyKS5jcnQwUgYIKwYBBQUHMAKGRmh0dHA6Ly9j
// SIG // cmwyLmFtZS5nYmwvYWlhL0JZMlBLSUNTQ0EwMS5BTUUu
// SIG // R0JMX0FNRSUyMENTJTIwQ0ElMjAwMSgyKS5jcnQwUgYI
// SIG // KwYBBQUHMAKGRmh0dHA6Ly9jcmwzLmFtZS5nYmwvYWlh
// SIG // L0JZMlBLSUNTQ0EwMS5BTUUuR0JMX0FNRSUyMENTJTIw
// SIG // Q0ElMjAwMSgyKS5jcnQwUgYIKwYBBQUHMAKGRmh0dHA6
// SIG // Ly9jcmw0LmFtZS5nYmwvYWlhL0JZMlBLSUNTQ0EwMS5B
// SIG // TUUuR0JMX0FNRSUyMENTJTIwQ0ElMjAwMSgyKS5jcnQw
// SIG // ga0GCCsGAQUFBzAChoGgbGRhcDovLy9DTj1BTUUlMjBD
// SIG // UyUyMENBJTIwMDEsQ049QUlBLENOPVB1YmxpYyUyMEtl
// SIG // eSUyMFNlcnZpY2VzLENOPVNlcnZpY2VzLENOPUNvbmZp
// SIG // Z3VyYXRpb24sREM9QU1FLERDPUdCTD9jQUNlcnRpZmlj
// SIG // YXRlP2Jhc2U/b2JqZWN0Q2xhc3M9Y2VydGlmaWNhdGlv
// SIG // bkF1dGhvcml0eTAdBgNVHQ4EFgQUbnzITVXlsHgMhs3R
// SIG // W8ZMWvMtVowwDgYDVR0PAQH/BAQDAgeAMFAGA1UdEQRJ
// SIG // MEekRTBDMSkwJwYDVQQLEyBNaWNyb3NvZnQgT3BlcmF0
// SIG // aW9ucyBQdWVydG8gUmljbzEWMBQGA1UEBRMNMjM2MTY3
// SIG // KzQ2Nzk3NDCCAeYGA1UdHwSCAd0wggHZMIIB1aCCAdGg
// SIG // ggHNhj9odHRwOi8vY3JsLm1pY3Jvc29mdC5jb20vcGtp
// SIG // aW5mcmEvQ1JML0FNRSUyMENTJTIwQ0ElMjAwMSgyKS5j
// SIG // cmyGMWh0dHA6Ly9jcmwxLmFtZS5nYmwvY3JsL0FNRSUy
// SIG // MENTJTIwQ0ElMjAwMSgyKS5jcmyGMWh0dHA6Ly9jcmwy
// SIG // LmFtZS5nYmwvY3JsL0FNRSUyMENTJTIwQ0ElMjAwMSgy
// SIG // KS5jcmyGMWh0dHA6Ly9jcmwzLmFtZS5nYmwvY3JsL0FN
// SIG // RSUyMENTJTIwQ0ElMjAwMSgyKS5jcmyGMWh0dHA6Ly9j
// SIG // cmw0LmFtZS5nYmwvY3JsL0FNRSUyMENTJTIwQ0ElMjAw
// SIG // MSgyKS5jcmyGgb1sZGFwOi8vL0NOPUFNRSUyMENTJTIw
// SIG // Q0ElMjAwMSgyKSxDTj1CWTJQS0lDU0NBMDEsQ049Q0RQ
// SIG // LENOPVB1YmxpYyUyMEtleSUyMFNlcnZpY2VzLENOPVNl
// SIG // cnZpY2VzLENOPUNvbmZpZ3VyYXRpb24sREM9QU1FLERD
// SIG // PUdCTD9jZXJ0aWZpY2F0ZVJldm9jYXRpb25MaXN0P2Jh
// SIG // c2U/b2JqZWN0Q2xhc3M9Y1JMRGlzdHJpYnV0aW9uUG9p
// SIG // bnQwHwYDVR0jBBgwFoAUllGE4Gtve/7YBqvD8oXmKa5q
// SIG // +dQwHwYDVR0lBBgwFgYKKwYBBAGCN1sBAQYIKwYBBQUH
// SIG // AwMwDQYJKoZIhvcNAQELBQADggEBAFNUZq2bELWmMfHQ
// SIG // bvcwusOE1xLbpndztAKz+1tAqO5zRQg07/KcajjNm8/6
// SIG // R+PQ13Z83Fwk41I3IqNN1fkDzt0JfMTjKpvGxPSnKH/n
// SIG // z5OA8g2OcvmM8UMpOPVEZ+Hmt1oYoQCZIP8ZxS4ip21l
// SIG // vIsqsYnvgeOLvXT327Fq8XIHnc0px9Gl8HyLdvSCgqRh
// SIG // y++KwQ2yh13S9KRI3/XNmAOjoktSB+1/7LgYxBWuCxGD
// SIG // 00hStgCV6YDO6vXZkr7WuAsrnUaGH9QVzykfgszU/Vy+
// SIG // WSV/C1LguS62YG7ey845VvtVJqNjrJlDt2AO/7Obx+k6
// SIG // nOrmfYrCMLIrdF36Lh0wggjoMIIG0KADAgECAhMfAAAA
// SIG // UeqP9pxzDKg7AAAAAABRMA0GCSqGSIb3DQEBCwUAMDwx
// SIG // EzARBgoJkiaJk/IsZAEZFgNHQkwxEzARBgoJkiaJk/Is
// SIG // ZAEZFgNBTUUxEDAOBgNVBAMTB2FtZXJvb3QwHhcNMjEw
// SIG // NTIxMTg0NDE0WhcNMjYwNTIxMTg1NDE0WjBBMRMwEQYK
// SIG // CZImiZPyLGQBGRYDR0JMMRMwEQYKCZImiZPyLGQBGRYD
// SIG // QU1FMRUwEwYDVQQDEwxBTUUgQ1MgQ0EgMDEwggEiMA0G
// SIG // CSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDJmlIJfQGe
// SIG // jVbXKpcyFPoFSUllalrinfEV6JMc7i+bZDoL9rNHnHDG
// SIG // fJgeuRIYO1LY/1f4oMTrhXbSaYRCS5vGc8145WcTZG90
// SIG // 8bGDCWr4GFLc411WxA+Pv2rteAcz0eHMH36qTQ8L0o3X
// SIG // Ob2n+x7KJFLokXV1s6pF/WlSXsUBXGaCIIWBXyEchv+s
// SIG // M9eKDsUOLdLTITHYJQNWkiryMSEbxqdQUTVZjEz6eLRL
// SIG // kofDAo8pXirIYOgM770CYOiZrcKHK7lYOVblx22pdNaw
// SIG // Y8Te6a2dfoCaWV1QUuazg5VHiC4p/6fksgEILptOKhx9
// SIG // c+iapiNhMrHsAYx9pUtppeaFAgMBAAGjggTcMIIE2DAS
// SIG // BgkrBgEEAYI3FQEEBQIDAgACMCMGCSsGAQQBgjcVAgQW
// SIG // BBQSaCRCIUfL1Gu+Mc8gpMALI38/RzAdBgNVHQ4EFgQU
// SIG // llGE4Gtve/7YBqvD8oXmKa5q+dQwggEEBgNVHSUEgfww
// SIG // gfkGBysGAQUCAwUGCCsGAQUFBwMBBggrBgEFBQcDAgYK
// SIG // KwYBBAGCNxQCAQYJKwYBBAGCNxUGBgorBgEEAYI3CgMM
// SIG // BgkrBgEEAYI3FQYGCCsGAQUFBwMJBggrBgEFBQgCAgYK
// SIG // KwYBBAGCN0ABAQYLKwYBBAGCNwoDBAEGCisGAQQBgjcK
// SIG // AwQGCSsGAQQBgjcVBQYKKwYBBAGCNxQCAgYKKwYBBAGC
// SIG // NxQCAwYIKwYBBQUHAwMGCisGAQQBgjdbAQEGCisGAQQB
// SIG // gjdbAgEGCisGAQQBgjdbAwEGCisGAQQBgjdbBQEGCisG
// SIG // AQQBgjdbBAEGCisGAQQBgjdbBAIwGQYJKwYBBAGCNxQC
// SIG // BAweCgBTAHUAYgBDAEEwCwYDVR0PBAQDAgGGMBIGA1Ud
// SIG // EwEB/wQIMAYBAf8CAQAwHwYDVR0jBBgwFoAUKV5RXmSu
// SIG // NLnrrJwNp4x1AdEJCygwggFoBgNVHR8EggFfMIIBWzCC
// SIG // AVegggFToIIBT4YxaHR0cDovL2NybC5taWNyb3NvZnQu
// SIG // Y29tL3BraWluZnJhL2NybC9hbWVyb290LmNybIYjaHR0
// SIG // cDovL2NybDIuYW1lLmdibC9jcmwvYW1lcm9vdC5jcmyG
// SIG // I2h0dHA6Ly9jcmwzLmFtZS5nYmwvY3JsL2FtZXJvb3Qu
// SIG // Y3JshiNodHRwOi8vY3JsMS5hbWUuZ2JsL2NybC9hbWVy
// SIG // b290LmNybIaBqmxkYXA6Ly8vQ049YW1lcm9vdCxDTj1B
// SIG // TUVSb290LENOPUNEUCxDTj1QdWJsaWMlMjBLZXklMjBT
// SIG // ZXJ2aWNlcyxDTj1TZXJ2aWNlcyxDTj1Db25maWd1cmF0
// SIG // aW9uLERDPUFNRSxEQz1HQkw/Y2VydGlmaWNhdGVSZXZv
// SIG // Y2F0aW9uTGlzdD9iYXNlP29iamVjdENsYXNzPWNSTERp
// SIG // c3RyaWJ1dGlvblBvaW50MIIBqwYIKwYBBQUHAQEEggGd
// SIG // MIIBmTBHBggrBgEFBQcwAoY7aHR0cDovL2NybC5taWNy
// SIG // b3NvZnQuY29tL3BraWluZnJhL2NlcnRzL0FNRVJvb3Rf
// SIG // YW1lcm9vdC5jcnQwNwYIKwYBBQUHMAKGK2h0dHA6Ly9j
// SIG // cmwyLmFtZS5nYmwvYWlhL0FNRVJvb3RfYW1lcm9vdC5j
// SIG // cnQwNwYIKwYBBQUHMAKGK2h0dHA6Ly9jcmwzLmFtZS5n
// SIG // YmwvYWlhL0FNRVJvb3RfYW1lcm9vdC5jcnQwNwYIKwYB
// SIG // BQUHMAKGK2h0dHA6Ly9jcmwxLmFtZS5nYmwvYWlhL0FN
// SIG // RVJvb3RfYW1lcm9vdC5jcnQwgaIGCCsGAQUFBzAChoGV
// SIG // bGRhcDovLy9DTj1hbWVyb290LENOPUFJQSxDTj1QdWJs
// SIG // aWMlMjBLZXklMjBTZXJ2aWNlcyxDTj1TZXJ2aWNlcyxD
// SIG // Tj1Db25maWd1cmF0aW9uLERDPUFNRSxEQz1HQkw/Y0FD
// SIG // ZXJ0aWZpY2F0ZT9iYXNlP29iamVjdENsYXNzPWNlcnRp
// SIG // ZmljYXRpb25BdXRob3JpdHkwDQYJKoZIhvcNAQELBQAD
// SIG // ggIBAFAQI7dPD+jfXtGt3vJp2pyzA/HUu8hjKaRpM3op
// SIG // ya5G3ocprRd7vdTHb8BDfRN+AD0YEmeDB5HKQoG6xHPI
// SIG // 5TXuIi5sm/LeADbV3C2q0HQOygS/VT+m1W7a/752hMIn
// SIG // +L4ZuyxVeSBpfwf7oQ4YSZPh6+ngZvBHgfBaVz4O9/wc
// SIG // fw91QDZnTgK9zAh9yRKKls2bziPEnxeOZMVNaxyV0v15
// SIG // 2PY2xjqIafIkUjK6vY9LtVFjJXenVUAmn3WCPWNFC1YT
// SIG // IIHw/mD2cTfPy7QA1pT+GPARAKt0bKtq9aCd/Ym0b5tP
// SIG // bpgCiRtzyb7fbNS1dE740re0COE67YV2wbeo2sXixzvL
// SIG // ftH8L7s9xv9wV+G22qyKt6lmKLjFK1yMw4Ni5fMabcgm
// SIG // zRvSjAcbqgp3tk4a8emaaH0rz8MuuIP+yrxtREPXSqL/
// SIG // C5bzMzsikuDW9xH10graZzSmPjilzpRfRdu20/9UQmC7
// SIG // eVPZ4j1WNa1oqPHfzET3ChIzJ6Q9G3NPCB+7KwX0OQmK
// SIG // yv7IDimj8U/GlsHD1z+EF/fYMf8YXG15LamaOAohsw/y
// SIG // wO6SYSreVW+5Y0mzJutnBC9Cm9ozj1+/4kqksrlhZgR/
// SIG // CSxhFH3BTweH8gP2FEISRtShDZbuYymynY1un+RyfiK9
// SIG // +iVTLdD1h/SxyxDpZMtimb4CgJQlMYIVJjCCFSICAQEw
// SIG // WDBBMRMwEQYKCZImiZPyLGQBGRYDR0JMMRMwEQYKCZIm
// SIG // iZPyLGQBGRYDQU1FMRUwEwYDVQQDEwxBTUUgQ1MgQ0Eg
// SIG // MDECEzYAAAF+/2/9BKQlWBIAAgAAAX4wDQYJYIZIAWUD
// SIG // BAIBBQCgga4wGQYJKoZIhvcNAQkDMQwGCisGAQQBgjcC
// SIG // AQQwHAYKKwYBBAGCNwIBCzEOMAwGCisGAQQBgjcCARUw
// SIG // LwYJKoZIhvcNAQkEMSIEIDianrP7EIHOdlfNb2RM5xVJ
// SIG // srOAE4b/dzKqUuTgQzIlMEIGCisGAQQBgjcCAQwxNDAy
// SIG // oBSAEgBNAGkAYwByAG8AcwBvAGYAdKEagBhodHRwOi8v
// SIG // d3d3Lm1pY3Jvc29mdC5jb20wDQYJKoZIhvcNAQEBBQAE
// SIG // ggEAa2XXW4rXVnwRnp6TklR93VhXYJ9mRMrxRv5+EiMH
// SIG // rm5SvIMcM9SRayZj2lOtg29NdbKHC31d/QJMo+WQzkVl
// SIG // YNq0u2MSAppaP0mQVeXiFYwDe7NtSaKs9GHOfycuxVg7
// SIG // 8tqmXJKWp2TIq/4MgTQCU5poub7VWJGnHKnUVOWhvijV
// SIG // Bd7fP+/3cCa1NWBfG2inc7zoW86CkroILpI13I+5tS1K
// SIG // 2t+7a0+AjrZSmNvo4EcEthluWJi2e7G5W55VEaprENV0
// SIG // O4gLVQT/HWCg0iaA8W/0RiWumPN7ZOUAUBl8l6suzmBq
// SIG // IfqqYQS2CtYmj5vDtKsg+ACq2zz25U0qfk1lH6GCEu4w
// SIG // ghLqBgorBgEEAYI3AwMBMYIS2jCCEtYGCSqGSIb3DQEH
// SIG // AqCCEscwghLDAgEDMQ8wDQYJYIZIAWUDBAIBBQAwggFV
// SIG // BgsqhkiG9w0BCRABBKCCAUQEggFAMIIBPAIBAQYKKwYB
// SIG // BAGEWQoDATAxMA0GCWCGSAFlAwQCAQUABCDpG4MAHwGj
// SIG // YJ3A9L50QaQwz6/rLhxC0QmC+XAdoUMQJQIGYZPfn79m
// SIG // GBMyMDIxMTIxNjIxMTYxOC45MjhaMASAAgH0oIHUpIHR
// SIG // MIHOMQswCQYDVQQGEwJVUzETMBEGA1UECBMKV2FzaGlu
// SIG // Z3RvbjEQMA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UEChMV
// SIG // TWljcm9zb2Z0IENvcnBvcmF0aW9uMSkwJwYDVQQLEyBN
// SIG // aWNyb3NvZnQgT3BlcmF0aW9ucyBQdWVydG8gUmljbzEm
// SIG // MCQGA1UECxMdVGhhbGVzIFRTUyBFU046NEQyRi1FM0RE
// SIG // LUJFRUYxJTAjBgNVBAMTHE1pY3Jvc29mdCBUaW1lLVN0
// SIG // YW1wIFNlcnZpY2Wggg5BMIIE9TCCA92gAwIBAgITMwAA
// SIG // AV/DrmVW5VNY7AAAAAABXzANBgkqhkiG9w0BAQsFADB8
// SIG // MQswCQYDVQQGEwJVUzETMBEGA1UECBMKV2FzaGluZ3Rv
// SIG // bjEQMA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UEChMVTWlj
// SIG // cm9zb2Z0IENvcnBvcmF0aW9uMSYwJAYDVQQDEx1NaWNy
// SIG // b3NvZnQgVGltZS1TdGFtcCBQQ0EgMjAxMDAeFw0yMTAx
// SIG // MTQxOTAyMTlaFw0yMjA0MTExOTAyMTlaMIHOMQswCQYD
// SIG // VQQGEwJVUzETMBEGA1UECBMKV2FzaGluZ3RvbjEQMA4G
// SIG // A1UEBxMHUmVkbW9uZDEeMBwGA1UEChMVTWljcm9zb2Z0
// SIG // IENvcnBvcmF0aW9uMSkwJwYDVQQLEyBNaWNyb3NvZnQg
// SIG // T3BlcmF0aW9ucyBQdWVydG8gUmljbzEmMCQGA1UECxMd
// SIG // VGhhbGVzIFRTUyBFU046NEQyRi1FM0RELUJFRUYxJTAj
// SIG // BgNVBAMTHE1pY3Jvc29mdCBUaW1lLVN0YW1wIFNlcnZp
// SIG // Y2UwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIB
// SIG // AQC8PXn5gtlkPbmmsO5OIMR0kghKCS5NthUwGhfI2GwD
// SIG // JEAug0BdFj5yIXizNREU7kPRVm4JX9Jl2w3dio3s0TZc
// SIG // +d8nCSEXohlEDp8Ob3eE4Iy1MS9e4NytDD9pzYWPy8j/
// SIG // fDJf+NF/dOXoA24iJ3WXbR4g29cX2Ne2u79Y/aN5rnPj
// SIG // AoBbfXzvlOAgzVKTDDECRa//UJVOGHSWsI28inyty7b6
// SIG // n6t5b4CtPx6YYg7V+XId23hjQSqMCkk14X7fKcLl0D66
// SIG // LrVoAeT2ZgDfF2YQAqOI1ov2tM4ACSXAaqF70uiJ61nB
// SIG // /xKov6lWo/FbOev2f+pGmGWbv9Zksy5+RACzAgMBAAGj
// SIG // ggEbMIIBFzAdBgNVHQ4EFgQUJezp05XNK4GexXe6pQxY
// SIG // LmE1OPUwHwYDVR0jBBgwFoAU1WM6XIoxkPNDe3xGG8Uz
// SIG // aFqFbVUwVgYDVR0fBE8wTTBLoEmgR4ZFaHR0cDovL2Ny
// SIG // bC5taWNyb3NvZnQuY29tL3BraS9jcmwvcHJvZHVjdHMv
// SIG // TWljVGltU3RhUENBXzIwMTAtMDctMDEuY3JsMFoGCCsG
// SIG // AQUFBwEBBE4wTDBKBggrBgEFBQcwAoY+aHR0cDovL3d3
// SIG // dy5taWNyb3NvZnQuY29tL3BraS9jZXJ0cy9NaWNUaW1T
// SIG // dGFQQ0FfMjAxMC0wNy0wMS5jcnQwDAYDVR0TAQH/BAIw
// SIG // ADATBgNVHSUEDDAKBggrBgEFBQcDCDANBgkqhkiG9w0B
// SIG // AQsFAAOCAQEADoLX2SyWEm7BN1u953dIS56kKh0hZdrK
// SIG // R8c3l8TOLiU9rgFZP0i1c8472XplAwXjnnSnlxvIXLaa
// SIG // 6aEDKVN4G7DVJ1Gg3rA3JkfnhCwsGGvlQZFAqrCBiZkJ
// SIG // Q8Lg8DWuu5MghD8j1ufWLtsP3Yza8DVko7bkcH1BaA5I
// SIG // 2Mg451w9I6LIuu6sSYFvK0ao5fWutoRs5c4BPmlS00+S
// SIG // ISuc9l+ti6YfI/X+F47Qj58nhShZoAVhz2NR2241B34P
// SIG // dUrQi8bnh9i42aEBE1jifqcRJYnF8FT+QdMJVpImrsLo
// SIG // N60ypw2+VilG9pZbJ0IGnoFfjEIzCOyur/rKb7DIEYz5
// SIG // YTCCBnEwggRZoAMCAQICCmEJgSoAAAAAAAIwDQYJKoZI
// SIG // hvcNAQELBQAwgYgxCzAJBgNVBAYTAlVTMRMwEQYDVQQI
// SIG // EwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRtb25kMR4w
// SIG // HAYDVQQKExVNaWNyb3NvZnQgQ29ycG9yYXRpb24xMjAw
// SIG // BgNVBAMTKU1pY3Jvc29mdCBSb290IENlcnRpZmljYXRl
// SIG // IEF1dGhvcml0eSAyMDEwMB4XDTEwMDcwMTIxMzY1NVoX
// SIG // DTI1MDcwMTIxNDY1NVowfDELMAkGA1UEBhMCVVMxEzAR
// SIG // BgNVBAgTCldhc2hpbmd0b24xEDAOBgNVBAcTB1JlZG1v
// SIG // bmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlv
// SIG // bjEmMCQGA1UEAxMdTWljcm9zb2Z0IFRpbWUtU3RhbXAg
// SIG // UENBIDIwMTAwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAw
// SIG // ggEKAoIBAQCpHQ28dxGKOiDs/BOX9fp/aZRrdFQQ1aUK
// SIG // AIKF++18aEssX8XD5WHCdrc+Zitb8BVTJwQxH0EbGpUd
// SIG // zgkTjnxhMFmxMEQP8WCIhFRDDNdNuDgIs0Ldk6zWczBX
// SIG // JoKjRQ3Q6vVHgc2/JGAyWGBG8lhHhjKEHnRhZ5FfgVSx
// SIG // z5NMksHEpl3RYRNuKMYa+YaAu99h/EbBJx0kZxJyGiGK
// SIG // r0tkiVBisV39dx898Fd1rL2KQk1AUdEPnAY+Z3/1ZsAD
// SIG // lkR+79BL/W7lmsqxqPJ6Kgox8NpOBpG2iAg16HgcsOmZ
// SIG // zTznL0S6p/TcZL2kAcEgCZN4zfy8wMlEXV4WnAEFTyJN
// SIG // AgMBAAGjggHmMIIB4jAQBgkrBgEEAYI3FQEEAwIBADAd
// SIG // BgNVHQ4EFgQU1WM6XIoxkPNDe3xGG8UzaFqFbVUwGQYJ
// SIG // KwYBBAGCNxQCBAweCgBTAHUAYgBDAEEwCwYDVR0PBAQD
// SIG // AgGGMA8GA1UdEwEB/wQFMAMBAf8wHwYDVR0jBBgwFoAU
// SIG // 1fZWy4/oolxiaNE9lJBb186aGMQwVgYDVR0fBE8wTTBL
// SIG // oEmgR4ZFaHR0cDovL2NybC5taWNyb3NvZnQuY29tL3Br
// SIG // aS9jcmwvcHJvZHVjdHMvTWljUm9vQ2VyQXV0XzIwMTAt
// SIG // MDYtMjMuY3JsMFoGCCsGAQUFBwEBBE4wTDBKBggrBgEF
// SIG // BQcwAoY+aHR0cDovL3d3dy5taWNyb3NvZnQuY29tL3Br
// SIG // aS9jZXJ0cy9NaWNSb29DZXJBdXRfMjAxMC0wNi0yMy5j
// SIG // cnQwgaAGA1UdIAEB/wSBlTCBkjCBjwYJKwYBBAGCNy4D
// SIG // MIGBMD0GCCsGAQUFBwIBFjFodHRwOi8vd3d3Lm1pY3Jv
// SIG // c29mdC5jb20vUEtJL2RvY3MvQ1BTL2RlZmF1bHQuaHRt
// SIG // MEAGCCsGAQUFBwICMDQeMiAdAEwAZQBnAGEAbABfAFAA
// SIG // bwBsAGkAYwB5AF8AUwB0AGEAdABlAG0AZQBuAHQALiAd
// SIG // MA0GCSqGSIb3DQEBCwUAA4ICAQAH5ohRDeLG4Jg/gXED
// SIG // PZ2joSFvs+umzPUxvs8F4qn++ldtGTCzwsVmyWrf9efw
// SIG // eL3HqJ4l4/m87WtUVwgrUYJEEvu5U4zM9GASinbMQEBB
// SIG // m9xcF/9c+V4XNZgkVkt070IQyK+/f8Z/8jd9Wj8c8pl5
// SIG // SpFSAK84Dxf1L3mBZdmptWvkx872ynoAb0swRCQiPM/t
// SIG // A6WWj1kpvLb9BOFwnzJKJ/1Vry/+tuWOM7tiX5rbV0Dp
// SIG // 8c6ZZpCM/2pif93FSguRJuI57BlKcWOdeyFtw5yjojz6
// SIG // f32WapB4pm3S4Zz5Hfw42JT0xqUKloakvZ4argRCg7i1
// SIG // gJsiOCC1JeVk7Pf0v35jWSUPei45V3aicaoGig+JFrph
// SIG // pxHLmtgOR5qAxdDNp9DvfYPw4TtxCd9ddJgiCGHasFAe
// SIG // b73x4QDf5zEHpJM692VHeOj4qEir995yfmFrb3epgcun
// SIG // Caw5u+zGy9iCtHLNHfS4hQEegPsbiSpUObJb2sgNVZl6
// SIG // h3M7COaYLeqN4DMuEin1wC9UJyH3yKxO2ii4sanblrKn
// SIG // QqLJzxlBTeCG+SqaoxFmMNO7dDJL32N79ZmKLxvHIa9Z
// SIG // ta7cRDyXUHHXodLFVeNp3lfB0d4wwP3M5k37Db9dT+md
// SIG // Hhk4L7zPWAUu7w2gUDXa7wknHNWzfjUeCLraNtvTX4/e
// SIG // dIhJEqGCAs8wggI4AgEBMIH8oYHUpIHRMIHOMQswCQYD
// SIG // VQQGEwJVUzETMBEGA1UECBMKV2FzaGluZ3RvbjEQMA4G
// SIG // A1UEBxMHUmVkbW9uZDEeMBwGA1UEChMVTWljcm9zb2Z0
// SIG // IENvcnBvcmF0aW9uMSkwJwYDVQQLEyBNaWNyb3NvZnQg
// SIG // T3BlcmF0aW9ucyBQdWVydG8gUmljbzEmMCQGA1UECxMd
// SIG // VGhhbGVzIFRTUyBFU046NEQyRi1FM0RELUJFRUYxJTAj
// SIG // BgNVBAMTHE1pY3Jvc29mdCBUaW1lLVN0YW1wIFNlcnZp
// SIG // Y2WiIwoBATAHBgUrDgMCGgMVAPoH0qo3QJ3ThRGlzkMg
// SIG // QnbqZkKHoIGDMIGApH4wfDELMAkGA1UEBhMCVVMxEzAR
// SIG // BgNVBAgTCldhc2hpbmd0b24xEDAOBgNVBAcTB1JlZG1v
// SIG // bmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlv
// SIG // bjEmMCQGA1UEAxMdTWljcm9zb2Z0IFRpbWUtU3RhbXAg
// SIG // UENBIDIwMTAwDQYJKoZIhvcNAQEFBQACBQDlZeoBMCIY
// SIG // DzIwMjExMjE2MjAzODI1WhgPMjAyMTEyMTcyMDM4MjVa
// SIG // MHQwOgYKKwYBBAGEWQoEATEsMCowCgIFAOVl6gECAQAw
// SIG // BwIBAAICDk8wBwIBAAICESEwCgIFAOVnO4ECAQAwNgYK
// SIG // KwYBBAGEWQoEAjEoMCYwDAYKKwYBBAGEWQoDAqAKMAgC
// SIG // AQACAwehIKEKMAgCAQACAwGGoDANBgkqhkiG9w0BAQUF
// SIG // AAOBgQCN6o5iqOXe/xZEngTDkwo1u46wVaksejrHxA+9
// SIG // DMXnvfXzuCNjTjaTs4ZMkcIGusegJZWdcSTxK+eiNAjZ
// SIG // V+/2Zi8d5208Ct78JeF0y1hTWTC4pQlFU/Wf4nljokS1
// SIG // UCk5lOAPUdVUG+EiTIrKTFxov/L3oE1CKonYp9a2IjCG
// SIG // +TGCAw0wggMJAgEBMIGTMHwxCzAJBgNVBAYTAlVTMRMw
// SIG // EQYDVQQIEwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRt
// SIG // b25kMR4wHAYDVQQKExVNaWNyb3NvZnQgQ29ycG9yYXRp
// SIG // b24xJjAkBgNVBAMTHU1pY3Jvc29mdCBUaW1lLVN0YW1w
// SIG // IFBDQSAyMDEwAhMzAAABX8OuZVblU1jsAAAAAAFfMA0G
// SIG // CWCGSAFlAwQCAQUAoIIBSjAaBgkqhkiG9w0BCQMxDQYL
// SIG // KoZIhvcNAQkQAQQwLwYJKoZIhvcNAQkEMSIEIIHMTAMP
// SIG // 7yzlDn5XRtASNriSzxw4NXN3Y8yh2E9ic5BdMIH6Bgsq
// SIG // hkiG9w0BCRACLzGB6jCB5zCB5DCBvQQg0M16tSsRrC7o
// SIG // 9LM5La55YSEapm8KeW1RnOgbuoYJTFwwgZgwgYCkfjB8
// SIG // MQswCQYDVQQGEwJVUzETMBEGA1UECBMKV2FzaGluZ3Rv
// SIG // bjEQMA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UEChMVTWlj
// SIG // cm9zb2Z0IENvcnBvcmF0aW9uMSYwJAYDVQQDEx1NaWNy
// SIG // b3NvZnQgVGltZS1TdGFtcCBQQ0EgMjAxMAITMwAAAV/D
// SIG // rmVW5VNY7AAAAAABXzAiBCC6qiHKxmU2ZZpJC6VrNjL5
// SIG // 8jeQyjRtUyqNDTch4yJjQDANBgkqhkiG9w0BAQsFAASC
// SIG // AQB4SLbAk0qLWCl2pCvddpCrH6hntXano9fEkHsm7gDh
// SIG // JcvaMlU6Qm4uznT/h9ST+pdeaUedraiCAUBdTpfrweZH
// SIG // 65rCwZR58BT1NCDjA6zFoeESJM6m5KmPPwvAlitZkCSQ
// SIG // zY01DUlybXMKXDxla071pcXVPzAjg9yUf93uHgOyCT1u
// SIG // aa7cXGK42Ig0C0KtGosKSjU6iPD4p9/6pFjjGC7jXPXe
// SIG // LtpSxOUhu04QkFq607When/iy++9IwzJctdS7/lr/01p
// SIG // jrwRSbjwshBCIp0XTR/voXddpH6JesVkt02DwE/ihdo7
// SIG // O4qmdgmG1KAnYvRu+7coIG+NrIvtRVrtwbrW
// SIG // End signature block
