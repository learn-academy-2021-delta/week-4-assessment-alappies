# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.
#I need to come up with a def that will test if a number is odd or even
inpt = gets.chomp
#making sure my return doesn't return open ended.
def odd_or_even(num)
#     #creating an if statement that will look for even numbers
  if num % 2 == 0
    #return even
    p "even"
#     #and an else statement for if it is not an even number.
  else
    p "odd"
#     #end for conditionals
  end
#   #end for my def.
end
p odd_or_even 221
p odd_or_even 42
p odd_or_even 7
#(Everything returned the correct "even" and "odd", but it double printed "odd""odd", "even""even"... I don't know if that's a terminal malfunction or if I messed something up.. )
# Expected output: '7 is odd'
#num2 = 42
# Expected output: '42 is even'
#num3 = 221
# Expected output: '221 is odd'



# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete


def my_string = (string)
    if my_string.delete "aeiou"
        return my_string
    end
end

p my_string 'Rubber Soul'
p my_string 'Sgt Pepper'
p my_string 'Abbey Road'
# album1 = 'Rubber Soul'
# # Expected output: 'Rbbr Sl'
# album2 = 'Sgt Pepper'
# # Expected output: 'Sgt Pppr'
# album3 = 'Abbey Road'
# Expected output: 'bby Rd'



# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forwards or backwards. Use the test variables provided.

def palindrome?(string)
    if string == string.reverse
      return true
    else
      puts “String is not a palindrome”
    end
   end
p palindrome 'Racecar'
p palindrome'LEARN'
p palindrome 'Rotator'
# is_palindrome1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
# is_palindrome2 = 'LEARN'
# # Expected output: 'LEARN is not a palindrome'
# is_palindrome3 = 'Rotator'
# # Expected output: 'Rotator is a palindrome'
