<?php
require('top.inc.php');
isAdmin();

if(isset($_GET['type']) && $_GET['type']!=''){
	$type=get_safe_value($con,$_GET['type']);
	if($type=='delete'){
		$id=get_safe_value($con,$_GET['id']);
		$delete_sql="delete from leadform where id='$id'";
		mysqli_query($con,$delete_sql);
	}
}
$sql="select * from leadform order by id asc";
$res=mysqli_query($con,$sql);
?>
<!-- Datatable CSS -->

<style>
    .order-table:after, .order-table:before {
    content: "";
    position: absolute;
    top: 0;
    height: 37px;
    width: 10px;
     background: transparent !important; 
}
</style>

      <!--<script src="assets/js/main.js" type="text/javascript"></script>-->
      <!--<script src="assets/js/vendor/jquery-2.1.4.min.js" type="text/javascript"></script>-->
      <!--<script src="assets/js/popper.min.js" type="text/javascript"></script>-->
      <!--<script src="assets/js/plugins.js" type="text/javascript"></script>-->
      <!--<script src="https://cdn.datatables.net/1.13.3/js/jquery.dataTables.min.js" type="text/javascript"></script>-->
      <!--<script src="https://code.jquery.com/jquery-3.5.1.js" type="text/javascript"></script>-->
<link href='https://cdn.datatables.net/1.11.5/css/jquery.dataTables.min.css' rel='stylesheet' type='text/css'>

<!-- jQuery Library -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

<!-- Datatable JS -->
<!--<script src="https://cdn.datatables.net/1.11.5/js/jquery.dataTables.min.js"></script>-->

<script src="https://cdn.datatables.net/1.13.3/js/jquery.dataTables.js"></script>
 <script>
    $(document).ready( function () {
        $('#empTable') .DataTable({
          
            "info": false
        });
    });
    
   
</script>




<div class="content pb-0">
	<div class="orders">
	   <div class="row">
		  <div class="col-xl-12">
			 <div class="card">
				<div class="card-body">
				   <div class="table-stats order-table ov-h">
					  <table class="table-strip" id="empTable">
						 <thead class="thead">
							<tr>
							   <th class="serial">#</th>
							   <th>Name</th>
							   <th>Email</th>
							   <th>Phone</th>
							   <th>Comments</th>
							   <th>Date</th>
							   <th>Page Url</th>
							   	<th>Client Ip</th>
							   <th></th>
							</tr>
						 </thead>
						 <tbody class="tbody">
							<?php 
					// 			$i=1;
							while($row=mysqli_fetch_assoc($res)){?>
							<tr>
							   <td class="serial"><?php echo $i?></td>
							   <td><?php echo $row['name']?></td>
							   <td><?php echo $row['email']?></td>
							   <td><?php echo $row['phone']?></td>
							   <td><?php echo $row['comments']?></td>
							   <td><?php echo $row['wholeDate']?></td>
							   <td><?php echo $row['page_url']?></td>
                                <td><?php echo $row['clientIP']?></td>
							   <td>
								<?php
								// echo "<span class='badge badge-delete'><a href='?type=delete&id=".$row['id']."'>Delete</a></span>";
								?>
							   </td>
							</tr>
							<?php } ?>
						 </tbody>
					  </table>
				   </div>
				</div>
  </div>
				</div>  </div>
				</div>
	
<div class="clearfix"></div>
         <footer class="site-footer">
            <div class="footer-inner bg-white">
               <div class="row">
                  <div class="col-sm-6">
                
				<p><center>  <h5><b>Bookwritingcube</b></h5></center></p>
				 
                  </div>                
               </div>
            </div>
         </footer>
</div>
    
      

</body>
</html>


