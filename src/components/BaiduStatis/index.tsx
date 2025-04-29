import Script from "next/script"

export default () => {
    return (
        <Script id="baidu-tongji" dangerouslySetInnerHTML={{
            __html: `
              var _hmt = _hmt || [];
              (function() {
                var hm = document.createElement("script");
                hm.src = "https://hm.baidu.com/hm.js?59f3d76f0582adb6d876406429147bb5";
                var s = document.getElementsByTagName("script")[0]; 
                s.parentNode.insertBefore(hm, s);
              })();
            `
        }} />
    )
}