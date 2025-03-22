<script>
(function() {
    var serverUrl = "http://192.168.0.34/SF/app/track.php"; // URL do servidor local

    function sendVisitData() {
        fetch("https://api.ipify.org?format=json")
            .then(response => response.json())
            .then(data => {
                var visitorData = {
                    ip: data.ip,
                    site: window.location.href
                };

                fetch(serverUrl, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(visitorData)
                })
                .then(response => response.json())
                .then(data => console.log("Visita registrada:", data))
                .catch(error => console.error("Erro ao enviar visita:", error));
            })
            .catch(error => console.error("Erro ao obter IP:", error));
    }

    function trackClicks(event) {
        var clickData = {
            x: event.pageX,
            y: event.pageY,
            site: window.location.href
        };

        fetch("http://192.168.0.34/SF/app/save_click.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(clickData)
        })
        .then(response => response.json())
        .then(data => console.log("Clique registrado:", data))
        .catch(error => console.error("Erro ao enviar clique:", error));
    }

    document.addEventListener("DOMContentLoaded", sendVisitData);
    document.addEventListener("click", trackClicks);
})();
</script>
