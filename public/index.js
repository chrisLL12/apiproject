$(document).ready(() => {
    $('#allCamerasButton').click(() => {
        $.ajax({
            url: 'http://localhost:8000/api/graphql',
            type: 'GET',
            contentType: 'application/json',
            data: JSON.stringify({
                query: `{Cameras}`
            }),
            success: (data) => {
                console.log('success', data);
                $('#status').html('Cameras: ' + data);
            }
        });
    });
});

// Test data
// $(document).ready(() => {
//     $('#allCamerasButton').click(() => {
//         $.ajax({
//                 url: '/api/users',
//                 type: 'GET',
//                 dataType: 'json',
//                 success: (data) => {
//                 console.log('success', data);
//                 }
//         });
//     });
// });