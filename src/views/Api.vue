<template>
    <div id="api">
        <pre style="text-align:left;font-size:18px;">
            # For a quick start check out our HTTP Requests collection (Tools|HTTP Client|Open HTTP Requests Collection) or
            # paste cURL into the file and request will be converted to HTTP Request format.
            #
            # Following HTTP Request Live Templates are available:
            # * 'gtrp' and 'gtr' create a GET request with or without query parameters;
            # * 'ptr' and 'ptrp' create a POST request with a simple or parameter-like body;
            # * 'mptr' and 'fptr' create a POST request to submit a form with a text or file field (multipart/form-data);

            GET http://localhost:3000/albums
            Accept: application/json

            ###

            DELETE http://localhost:3000/albums/3751508
            Accept: application/json

            ###


        </pre>
    </div>
</template>

<script>
    export default {
        name: "Api"
    }
</script>

<style scoped>

</style>