<?php
                    include 'php/conn.php';
                    $query = "SELECT * from training_posts_held";
                    $result = mysqli_query($conn, $query);
                    while ($row = mysqli_fetch_assoc($result)) {
                    ?>
                        <tr>
                            <td>
                                <?= $row["id"] ?>
                            </td>
                            <td><?= $row["Hospital"] ?></td>
                            <td><?= $row["Residency_Year"] ?></td>
                            <td><?= $row["Finish_Date"] ?></td>
                            <td> <?= $row["Consultant"] ?></td>
                            <td> <?= $row["Consultant_signature"] ?></td>

                        </tr>
                    <?php
                    }
                    ?>