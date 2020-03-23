
$(document).ready(() => {
    $('#tx').click(() => {
        $.ajax({
                url: 'http://localhost:8000/api/graphql',
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify({
                    query: `{
                        cameras(id: 1) { 
                            title
                            rating
                            review
                         }
                    }`
                }),
                success: (data) => {
                    $('#status').html(data.data.cameras.title);
                    $('#status2').html('Rating: ' + data.data.cameras.rating);
                    $('#status3').html('Featured Review: ' + data.data.cameras.review);
                }
        });
    });
    $('#px').click(() => {
        $.ajax({
            url: 'http://localhost:8000/api/graphql',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                query: `{
                        cameras(id: 2) { 
                            title
                            rating
                            review
                         }
                    }`
            }),
            success: (data) => {
                $('#status').html(data.data.cameras.title);
                $('#status2').html('Rating: ' + data.data.cameras.rating);
                $('#status3').html('Featured Review: ' + data.data.cameras.review);
            }
        });
    });
    $('#rte').click(() => {
        $.ajax({
            url: 'http://localhost:8000/api/graphql',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                query: `{
                        cameras(id: 3) { 
                            title
                            rating
                            review
                         }
                    }`
            }),
            success: (data) => {
                $('#status').html(data.data.cameras.title);
                $('#status2').html('Rating: ' + data.data.cameras.rating);
                $('#status3').html('Featured Review: ' + data.data.cameras.review);
            }
        });
    });
    $('#pr').click(() => {
        $.ajax({
            url: 'http://localhost:8000/api/graphql',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                query: `{
                        cameras(id: 4) { 
                            title
                            rating
                            review
                         }
                    }`
            }),
            success: (data) => {
                $('#status').html(data.data.cameras.title);
                $('#status2').html('Rating: ' + data.data.cameras.rating);
                $('#status3').html('Featured Review: ' + data.data.cameras.review);
            }
        });
    });
    $('#rte2').click(() => {
        $.ajax({
            url: 'http://localhost:8000/api/graphql',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                query: `{
                        cameras(id: 5) { 
                            title
                            rating
                            review
                         }
                    }`
            }),
            success: (data) => {
                $('#status').html(data.data.cameras.title);
                $('#status2').html('Rating: ' + data.data.cameras.rating);
                $('#status3').html('Featured Review: ' + data.data.cameras.review);
            }
        });
    });
    // Add Camera
    $('#addForm').submit((e) => {
        //const newId = $('#addId').val();
        const newCamera = $('#addCamera').val();
        const newRating = $('#addRating').val();
        const newReview = $('#addReview').val();
        e.preventDefault();
        $.ajax({
            url: 'http://localhost:8000/api/graphql',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                query: `mutation { 
                       addNewCamera(camera:{ 
                            title: "${newCamera}"
                            rating: ${newRating}
                            review: "${newReview}"
                        }) { 
                            title
                            rating
                            review
                         }
                 }`
            }),
            success: (data) => {
                $('#status').html(data.data.addNewCamera.title);
                $('#status2').html('Rating: ' + data.data.addNewCamera.rating);
                $('#status3').html('Featured Review: ' + data.data.addNewCamera.review);
            },
            error: () => {
                alert('error');
            }

        });
    });
});

// Build select dropdown for cameras
// $(document).ready(() => {
//     $(window).on('load', () => {
//         $.each(selectValues, (key, value) => {
//             $('#camera-select').append($("<option></option>").attr("value", key).text(value));
//         })
//     });
// });



