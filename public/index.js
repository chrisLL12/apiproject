
$(document).ready(() => {
    $('#allCamerasButton').click(() => {
        $.ajax({
                url: 'http://localhost:8000/api/graphql',
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify({
                    query: `{cameras(id:1){id}}`
                }),
                success: (data) => {
                    console.log('success', data);
                    $('#status').html('Cameras: ' + data.data.cameras[0].id);
                }
        });
    });
});

