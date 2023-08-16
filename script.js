//
//
//const DemoApp = {
//        initData: Telegram.WebApp.initData || '',
//        initDataUnsafe: Telegram.WebApp.initDataUnsafe || {},
//        MainButton: Telegram.WebApp.MainButton,
//
//        init(options) {
//            Telegram.WebApp.ready();
//            Telegram.WebApp.MainButton.setParams({
//                text: 'CLOSE WEBVIEW',
//                is_visible: true
//            }).onClick(DemoApp.close);
//        },
//        close() {
//            Telegram.WebApp.close();
//        },
//
//        scanQrCode() {
//
//            document.querySelectorAll('button').forEach((btn) => btn.disabled = true);
//
////            Telegram.WebApp.showScanQrPopup({text: 'with any link'}, function (qrCode) {
//                // Process the scanned QR code for order
//                // For this example, we assume the QR code contains the order ID
//                console.log(DemoApp.initDataUnsafe.chat.id);
//
//                Telegram.WebApp.sendMessage({
//                  chat_id: DemoApp.initDataUnsafe.chat.id,
//                  text: "qrCode",
//                  token: botToken,
//                });
//
////                Telegram.WebApp.showAlert(qrCode);
//                DemoApp.close();
//                return true;
////            });
//        }
//}
//
//DemoApp.init();


const DemoApp = {
    initData: Telegram.WebApp.initData || '',
    initDataUnsafe: Telegram.WebApp.initDataUnsafe || {},
    MainButton: Telegram.WebApp.MainButton,

    init(options) {
        Telegram.WebApp.ready();
        Telegram.WebApp.MainButton.setParams({
            text: 'CLOSE WEBVIEW',
            is_visible: true
        }).onClick(DemoApp.close);
    },
    close() {
        Telegram.WebApp.close();
    },

    scanQrCode() {
        document.querySelectorAll('button').forEach((btn) => btn.disabled = true);

        // Make sure to replace 'YOUR_BOT_TOKEN' with your actual bot token
        const botToken = '6504257620:AAH4_RxmRPAWuIlQlpwwFirf6IziGssdKGQ';
//        const chatId = DemoApp.initDataUnsafe.chat.id;

        const newParagraph = document.createElement("p");
        newParagraph.textContent = "CHAT ID: " + "chatId";
        const sectionContainer = document.getElementById("section");
        sectionContainer.appendChild(newParagraph);
//        Telegram.WebApp.showScanQrPopup({text: 'with any link'}, function (qrCode) {
            // Process the scanned QR code for order
            // For this example, we assume the QR code contains the order ID
            console.log("Scanned QR Code: qrCode");

            // Send the QR code as a message to the bot
            const messageText = 'Scanned QR Code: ' + 'qrCode';
            const sendMessageUrl = 'https://api.telegram.org/bot' + botToken + '/sendMessage';
            const params = {
                chat_id: "chatId",
                text: messageText,
            };

            // Make an AJAX POST request to send the message
            fetch(sendMessageUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(params),
            })
            .then(response => response.json())
            .then(data => {
                console.log("Message sent:", data);
//                DemoApp.close();
            })
            .catch(error => {
                console.error("Error sending message:", error);
//                DemoApp.close();
            });

//            return true;
    }
}

DemoApp.init();

