const results = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewpoint" content="width=device-width, intitial-scale=1.0">
    <!-- <link rel="stylesheet" type="text/css" href="ajax.css"> -->

    <title> Visitor form </title>
</head>
<body>

    <h1 class="heading"> Visitor's form </h1>

    <!-- Visitor's form -->

    <form action="single-page-app" method="POST" id="forms">

        <input type="text" name="visitor_name" placeholder="Visitor name" id="body">
        <br><br>
        <input type="text" name="assistant" placeholder="Assistant" id="body">
        <br><br>
        <input type="text" name="visitors_age" placeholder="Visitor's age" id="body">
        <br><br>
        <input type="text" name="date_of_visit" placeholder="Date of visit" id="body">
        <br><br>
        <input type="text" name="time_of_visit" placeholder="Time of visit" id="body">
        <br><br>
        <input type="text" placeholder="Comments" id="body">
        <br><br>
        <button type="submit" onclick="addNewVisitor(); viewVisitors()"> Submit </button>

    </form>

    <br><br>

    <!-- Visitor's table -->

    <table id="visitors" width = 700px border ="1">

        <h1>Visitor table</h1>

        <thead>
            <tr>
                <th> Id </th>
                <th> Name </th>
                <th> Age </th>
                <th> Date </th>
                <th> Time </th>
                <th> Assistant </th>
                <th> Comments </th>
                <th>&nbsp;</th>
            </tr>
        </thead>

        <tbody id = "content" >
    
        </tbody>

    </table>

</body>
    
</html>
`

module.exports = results;