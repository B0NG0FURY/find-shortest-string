def find_shortest_string(arr)
  min = arr[0]
  arr.each do |str|
    if str.length < min.length
      min = str
    end
  end
  min
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 'a'"
  puts "=>", find_shortest_string(['aaa', 'a', 'bb', 'ccc'])

  puts

  puts "Expecting: 'hi'"
  puts "=>", find_shortest_string(['cat', 'hi', 'dog', 'an'])

  puts

  puts "Expecting: 'lily'"
  puts "=>", find_shortest_string(['flower', 'juniper', 'lily', 'dadelion'])

  # Don't forget to add your own!

  # BENCHMARK HERE
end

# Please add your pseudocode to this file
# And a written explanation of your solution
