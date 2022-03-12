"use strict";

// $(document).ready(function () {

$(function () {
    $("#articlesList").on("click", "a", function (event) {
        console.log($(this).text());
        let elements = $('<article><p>Article Title -<a href="http://www.google.com"> Click to Add a new Article</a></p></article>');
        $("section").append(elements);
        event.preventDefault();
    })
});


<tr>
    <td>1</td>
    <td>1</td>
    <td>1</td>
    <td>1</td>
    <td>1</td>
    <td>1</td>
    <td>1</td>
</tr>
