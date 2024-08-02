export default function NavBar() {
    return (
        <nav className="flex">
            <div>
                <svg width="170" height="48" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.336 48c3.936 0 6.968-.72 9.096-2.16 2.128-1.44 3.192-3.312 3.192-5.616 0-1.264-.284-2.312-.852-3.144-.568-.832-1.56-1.5-2.976-2.004s-3.388-.9-5.916-1.188c-1.504-.176-2.648-.356-3.432-.54-.784-.184-1.32-.388-1.608-.612-.288-.224-.432-.496-.432-.816 0-.32.088-.576.264-.768.059-.064.116-.117.173-.16l.03-.019.076.008c.726.082 1.489.123 2.289.123 2.112 0 4-.384 5.664-1.152 1.664-.768 2.976-1.804 3.936-3.108a7.21 7.21 0 001.44-4.38c0-1.408-.42-2.736-1.26-3.984-.84-1.248-2.072-2.264-3.696-3.048a10.812 10.812 0 00-2.12-.753l-.142-.032c.188-.499.402-.889.642-1.171.32-.376.728-.564 1.224-.564.448 0 .836.164 1.164.492.328.328.652.708.972 1.14.32.432.68.812 1.08 1.14.4.328.896.492 1.488.492.992 0 1.756-.292 2.292-.876.536-.584.804-1.396.804-2.436 0-1.184-.328-2.144-.984-2.88-.656-.736-1.648-1.104-2.976-1.104-1.552 0-2.82.544-3.804 1.632-.908 1.004-1.65 2.295-2.224 3.872l-.063.179-.255-.05a16.928 16.928 0 00-3.038-.257c-2.416 0-4.504.392-6.264 1.176-1.76.784-3.116 1.844-4.068 3.18C1.1 19.948.624 21.456.624 23.136c0 1.424.468 2.74 1.404 3.948.936 1.208 2.272 2.18 4.008 2.916.81.343 1.693.607 2.647.79l.244.044c-1.274.154-2.33.4-3.167.738-1.088.44-1.872 1.004-2.352 1.692-.48.688-.72 1.472-.72 2.352 0 .96.264 1.724.792 2.292.396.426.972.787 1.728 1.082l.015.007-.102.013c-1.649.233-2.872.61-3.669 1.13C.484 40.772 0 41.76 0 43.104c0 .976.404 1.832 1.212 2.568.808.736 2.116 1.308 3.924 1.716 1.808.408 4.208.612 7.2.612zm-.792-18.348c-.464-.552-.884-1.392-1.26-2.52-.376-1.128-.684-2.524-.924-4.188-.224-1.648-.308-3.064-.252-4.248.056-1.184.228-2.1.516-2.748.288-.648.664-1.004 1.128-1.068.656-.096 1.32.492 1.992 1.764.672 1.272 1.184 3.148 1.536 5.628.352 2.512.38 4.468.084 5.868-.296 1.4-.78 2.148-1.452 2.244-.448.064-.904-.18-1.368-.732zm1.032 17.724c-2.128 0-3.764-.624-4.908-1.872-1.144-1.248-1.716-2.912-1.716-4.992a3.569 3.569 0 01.173-1.133l.028-.079.147.041c1.132.306 2.584.584 4.356.835 1.856.256 3.296.556 4.32.9 1.024.344 1.736.764 2.136 1.26.4.496.6 1.088.6 1.776 0 .784-.188 1.416-.564 1.896-.376.48-.944.828-1.704 1.044-.76.216-1.716.324-2.868.324zM42.984 36.72c1.504 0 2.692-.244 3.564-.732.872-.488 1.496-1.036 1.872-1.644.376-.608.564-1.096.564-1.464 0-.08-.012-.132-.036-.156-.024-.024-.06-.036-.108-.036a.115.115 0 00-.084.036c-.024.024-.044.076-.06.156-.064.496-.212.836-.444 1.02-.232.184-.468.276-.708.276a.784.784 0 01-.612-.288c-.168-.192-.252-.48-.252-.864V21.168c0-2.24-.764-3.952-2.292-5.136-1.528-1.184-3.828-1.776-6.9-1.776-2.272 0-4.172.304-5.7.912-1.528.608-2.676 1.364-3.444 2.268-.768.904-1.152 1.796-1.152 2.676 0 1.024.284 1.784.852 2.28.568.496 1.292.744 2.172.744 1.312 0 2.376-.404 3.192-1.212.816-.808 1.224-1.748 1.224-2.82V16.56c0-.576.16-1.032.48-1.368.32-.336.752-.504 1.296-.504a1.4 1.4 0 011.092.504c.296.336.444.792.444 1.368v8.88l-.052-.017c-.336-.1-.759-.157-1.27-.171l-.262-.004c-3.792 0-6.492.548-8.1 1.644-1.608 1.096-2.412 2.612-2.412 4.548 0 1.536.604 2.8 1.812 3.792 1.208.992 2.732 1.488 4.572 1.488a8.91 8.91 0 004.02-.924 6.539 6.539 0 001.948-1.45l.181-.209.002.053c.05.6.343 1.13.88 1.59l.169.136c.704.536 1.888.804 3.552.804zm-6.288-2.4c-.672 0-1.224-.32-1.656-.96-.432-.64-.648-1.68-.648-3.12 0-1.536.208-2.672.624-3.408.416-.736.976-1.104 1.68-1.104.448 0 .84.04 1.176.12l.072.02v7.967l-.12.089c-.33.226-.652.356-.97.388l-.158.008zm25.488 1.92c.08 0 .14-.016.18-.048.04-.032.06-.08.06-.144a.183.183 0 00-.06-.132c-.04-.04-.116-.068-.228-.084l-.912-.216c-.208-.048-.356-.148-.444-.3-.088-.152-.132-.356-.132-.612V.336a.351.351 0 00-.084-.24C60.508.032 60.424 0 60.312 0c-.096 0-.18.008-.252.024-.072.016-.204.048-.396.096l-9.096 2.52a.533.533 0 00-.168.072.162.162 0 00-.072.144c0 .064.02.116.06.156.04.04.116.06.228.06h.936c.144 0 .248.032.312.096s.096.16.096.288v31.248c0 .256-.04.46-.12.612-.08.152-.232.252-.456.3l-.912.216c-.112.016-.188.044-.228.084a.183.183 0 00-.06.132c0 .064.024.112.072.144a.296.296 0 00.168.048h11.76zm13.728 0c.08 0 .14-.016.18-.048.04-.032.06-.08.06-.144a.183.183 0 00-.06-.132c-.04-.04-.116-.068-.228-.084l-.912-.216c-.208-.048-.356-.148-.444-.3-.088-.152-.132-.356-.132-.612V.336a.351.351 0 00-.084-.24C74.236.032 74.152 0 74.04 0c-.096 0-.18.008-.252.024-.072.016-.204.048-.396.096l-9.096 2.52a.533.533 0 00-.168.072.162.162 0 00-.072.144c0 .064.02.116.06.156.04.04.116.06.228.06h.936c.144 0 .248.032.312.096s.096.16.096.288v31.248c0 .256-.04.46-.12.612-.08.152-.232.252-.456.3l-.912.216c-.112.016-.188.044-.228.084a.183.183 0 00-.06.132c0 .064.024.112.072.144a.296.296 0 00.168.048h11.76zm12.528.48c2 0 3.792-.42 5.376-1.26 1.584-.84 2.836-1.984 3.756-3.432.92-1.448 1.38-3.084 1.38-4.908 0-.096-.02-.16-.06-.192a.207.207 0 00-.132-.048c-.016 0-.044.012-.084.036-.04.024-.06.076-.06.156 0 1.488-.556 2.676-1.668 3.564-1.112.888-2.556 1.332-4.332 1.332-2.208 0-3.976-.756-5.304-2.268-.94-1.071-1.548-2.594-1.823-4.568l-.028-.22h12.915c.192 0 .34-.036.445-.108l.071-.06a.578.578 0 00.156-.408c0-1.92-.416-3.64-1.248-5.16-.832-1.52-2.012-2.72-3.54-3.6-1.528-.88-3.34-1.32-5.436-1.32-2.352 0-4.396.46-6.132 1.38a9.64 9.64 0 00-4.02 3.96c-.944 1.72-1.416 3.78-1.416 6.18 0 2.144.48 4.04 1.44 5.688a10.213 10.213 0 003.96 3.864c1.68.928 3.608 1.392 5.784 1.392zm-3.065-12.675a21.599 21.599 0 01-.055-1.581c0-1.968.116-3.512.348-4.632.232-1.12.532-1.908.9-2.364.368-.456.768-.684 1.2-.684.624 0 1.228.7 1.812 2.1.584 1.4.876 3.708.876 6.924 0 .352-.144.528-.432.528h-4.625l-.024-.291zm28.409 12.195a.393.393 0 00.216-.048.162.162 0 00.072-.144.163.163 0 00-.048-.12c-.032-.032-.096-.056-.192-.072l-2.352-.48a.739.739 0 01-.456-.336 1.052 1.052 0 01-.168-.576V23.52c0-1.088.064-1.976.192-2.664.128-.688.308-1.192.54-1.512.232-.32.5-.48.804-.48.336 0 .568.112.696.336.128.224.2.512.216.864l.048.912c.064 1.168.352 2.06.864 2.676.512.616 1.336.924 2.472.924 1.232 0 2.256-.416 3.072-1.248.816-.832 1.224-2.112 1.224-3.84 0-1.76-.344-3.072-1.032-3.936-.688-.864-1.688-1.296-3-1.296-1.072 0-2.104.34-3.096 1.02-.992.68-1.804 1.688-2.436 3.024a8.783 8.783 0 00-.556 1.555l-.008.03v-5.101a.512.512 0 00-.032-.181l-.04-.083c-.048-.08-.136-.12-.264-.12a1.54 1.54 0 00-.276.024c-.088.016-.204.04-.348.072l-9.12 2.064a.388.388 0 00-.216.096c-.048.048-.072.096-.072.144 0 .048.024.092.072.132.048.04.104.06.168.06h1.056c.144 0 .244.044.3.132a.64.64 0 01.084.348v17.376c0 .192-.04.356-.12.492-.08.136-.232.228-.456.276l-.864.192a.542.542 0 00-.24.096c-.064.048-.096.096-.096.144 0 .048.024.092.072.132.048.04.12.06.216.06h13.104zm14.088-23.448c1.472 0 2.676-.464 3.612-1.392.936-.928 1.404-2.064 1.404-3.408 0-1.344-.468-2.48-1.404-3.408-.936-.928-2.14-1.392-3.612-1.392-1.456 0-2.64.464-3.552 1.392-.912.928-1.368 2.064-1.368 3.408 0 1.344.456 2.48 1.368 3.408.912.928 2.096 1.392 3.552 1.392zm5.976 23.448c.08 0 .14-.016.18-.048.04-.032.06-.08.06-.144a.183.183 0 00-.06-.132c-.04-.04-.116-.068-.228-.084l-.912-.216c-.208-.048-.356-.148-.444-.3-.088-.152-.132-.356-.132-.612V14.496a.351.351 0 00-.084-.24c-.056-.064-.14-.096-.252-.096-.096 0-.18.008-.252.024-.072.016-.204.048-.396.096l-9.096 2.52a.533.533 0 00-.168.072.162.162 0 00-.072.144c0 .064.02.116.06.156.04.04.116.06.228.06h.936c.144 0 .248.032.312.096s.096.16.096.288v17.088c0 .256-.04.46-.12.612-.08.152-.232.252-.456.3l-.912.216c-.112.016-.188.044-.228.084a.183.183 0 00-.06.132c0 .064.024.112.072.144a.296.296 0 00.168.048h11.76zm18.288.48c1.504 0 2.692-.244 3.564-.732.872-.488 1.496-1.036 1.872-1.644.376-.608.564-1.096.564-1.464 0-.08-.012-.132-.036-.156-.024-.024-.06-.036-.108-.036a.115.115 0 00-.084.036c-.024.024-.044.076-.06.156-.064.496-.212.836-.444 1.02-.232.184-.468.276-.708.276a.784.784 0 01-.612-.288c-.168-.192-.252-.48-.252-.864V21.168c0-2.24-.764-3.952-2.292-5.136-1.528-1.184-3.828-1.776-6.9-1.776-2.272 0-4.172.304-5.7.912-1.528.608-2.676 1.364-3.444 2.268-.768.904-1.152 1.796-1.152 2.676 0 1.024.284 1.784.852 2.28.568.496 1.292.744 2.172.744 1.312 0 2.376-.404 3.192-1.212.816-.808 1.224-1.748 1.224-2.82V16.56c0-.576.16-1.032.48-1.368.32-.336.752-.504 1.296-.504a1.4 1.4 0 011.092.504c.296.336.444.792.444 1.368v8.88l-.052-.017c-.336-.1-.759-.157-1.27-.171l-.262-.004c-3.792 0-6.492.548-8.1 1.644-1.608 1.096-2.412 2.612-2.412 4.548 0 1.536.604 2.8 1.812 3.792 1.208.992 2.732 1.488 4.572 1.488a8.91 8.91 0 004.02-.924 6.539 6.539 0 001.948-1.45l.181-.209.002.053c.05.6.343 1.13.88 1.59l.169.136c.704.536 1.888.804 3.552.804zm-6.288-2.4c-.672 0-1.224-.32-1.656-.96-.432-.64-.648-1.68-.648-3.12 0-1.536.208-2.672.624-3.408.416-.736.976-1.104 1.68-1.104.448 0 .84.04 1.176.12l.072.02v7.967l-.12.089c-.33.226-.652.356-.97.388l-.158.008zm18.72 2.4c.944 0 1.792-.228 2.544-.684A5.045 5.045 0 00168.9 34.2c.44-.768.66-1.608.66-2.52 0-.896-.22-1.72-.66-2.472a5.007 5.007 0 00-1.788-1.8c-.752-.448-1.6-.672-2.544-.672-.912 0-1.74.224-2.484.672a4.942 4.942 0 00-1.764 1.8 4.876 4.876 0 00-.648 2.472c0 .912.216 1.752.648 2.52a4.981 4.981 0 001.764 1.836 4.66 4.66 0 002.484.684z" fill="#000" fillRule="nonzero"/></svg>
            </div>
            <div>
                <button className="uppercase">start slideshow</button>
            </div>
        </nav>
    )
}