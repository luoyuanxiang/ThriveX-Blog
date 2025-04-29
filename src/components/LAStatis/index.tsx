import Script from "next/script"

export default () => {
    return (
        <>
            <Script
                id="51la-sdk"
                strategy="afterInteractive"
                src="//sdk.51.la/js-sdk-pro.min.js"
            />
            <Script
                id="51la-init"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `LA.init({id:"3FYZE9zfaINipTml", ck:"3FYZE9zfaINipTml"})`,
                }}
            />
        </>
    )
}