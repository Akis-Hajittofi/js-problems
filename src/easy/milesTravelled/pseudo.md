# Pseudo Code Solution
function mileTravelled (time in minutes, speed)
    return speed times time in minutes divided by 60

function rounding (number)
    transform number to string
    If the number is not already rounded
        If the decimal is below 5
            return the integer of the string
        else
            return the integer of the string + 1
    else return the number