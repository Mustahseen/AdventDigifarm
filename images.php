<?php

// Connect to the MySQL database
$connect = mysqli_connect('localhost', 'root', '', 'digifarm');

// If the connection did not work, display an error message
if (!$connect) {
    echo 'Error Code: ' . mysqli_connect_error() . '<br>';
    echo 'Error Message: ' . mysqli_connect_error() . '<br>';
    exit;
}

?>
<!DOCTYPE html>
<html >

<head>
    <title>PHP, MySQL, and Images</title>
</head>

<body>

    <h1>PHP, MySQL, and Images</h1>

    <?php

    // Create a query
    $query = 'SELECT id, image_name
            FROM titanfarm
            ORDER BY id';

    // Execute the query
    $result = mysqli_query($connect, $query);

    // If there is no result, display an error message
    if (!$result) {
        echo 'Error Message: ' . mysqli_error($connect) . '<br>';
        exit;
    }

    // Display the number of recirds found
    echo '<p>The query found ' . mysqli_num_rows($result) . ' rows:</p>';

    // Loop through the records found
    while ($record = mysqli_fetch_assoc($result)) {

        // Output the record using if statements and echo
        echo '<hr>';

        echo '<h2>' . $record['id'] . '</h2>';

        echo '<img src="./images/' . $record['image_name'] . '" width="300">';

    }

    ?>

    <!-- <img src="./images/L1_R1_1_L.jpg"> -->
</body>

</html>