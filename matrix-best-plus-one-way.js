var matrix = [[1,2,9], [5,3,2], [4,6,7]];

function maxPath (matrix, i, j, m, n, prev){ //return number

  if(i >= m || i < 0){
    return 0;
  }
  if(j >= n || j < 0){
    return 0;
  }
  if(prev !== undefined && matrix[i][j] !== prev+1){
    return 0;
  }
  
  var max1  = maxPath(matrix, i+1, j, m, n, matrix[i][j]);
  var max2  = maxPath(matrix, i, j+1, m, n, matrix[i][j]);
  var max3  = maxPath(matrix, i-1, j, m, n, matrix[i][j]);
  var max4  = maxPath(matrix, i, j-1, m, n, matrix[i][j]);
  var max = Math.max(max1, max2, max3, max4);
  return max + 1;
}

function maxPathMatrix (matrix, m, n){
  var max = 0;
  for(var i=0; i<m; i++){
    for(var j=0; j<n; j++){
      var currMax = maxPath (matrix, i, j, m, n);
      if(currMax > max){
        max = currMax;
      }
    }
  }
  return max;
}

maxPathMatrix (matrix, 3, 3);