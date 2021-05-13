</script>
       function findRepeatingElement(arr, low, high)
      {
        if (low > high) return -1;
 
        var mid = parseInt((low + high) / 2);

        if (arr[mid] != mid + 1)
        {
          if (mid > 0 && arr[mid] == arr[mid - 1]) return mid;
 
          return findRepeatingElement(arr, low, mid - 1);
        }

        return findRepeatingElement(arr, mid + 1, high);
      }
 
      var arr = [0,1,2,3,4,5....];
      var n = 101;
      var index = findRepeatingElement(arr, 0, n - 1);
      if (index != -1) document.write(arr[index]);
       
    </script>