import Script from "next/script"

export default () => {
    const statsCode = `
    <!-- 51.la 网站统计代码 -->
    <script type="text/javascript" src="https://sdk.51.la/js-sdk-pro.min.js"></script>
    <script type="text/javascript">
      LA.init({id:"3FYZE9zfaINipTml",ck:"3FYZE9zfaINipTml"})
    </script>
  `
    return (
        <Script
            id="stats-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{__html: statsCode}}
        />
    )
}