<html>
    <head>
        <script>
            var fruits = [];
            fruits[0]="banana";
            fruits[1]="apple";
            fruits[2]="pineapple";
            fruits[3]="guava";
            fruits[4]="mango";
        </script>
    </head>
    <body>
        <script>
            document.write("<h3>Array : Type 3</h3>")
            document.write("<hr />");
            document.write("<ul>");
            fruits.forEach(function(item){
                document.write("<li>"+item+"</li>");
            });  
            document.write("</ul>");
        </script>
    </body>
</html>
