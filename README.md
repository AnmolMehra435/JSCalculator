# JSCalculator
I just made a calculator using javascript mainly through the eval() function of js but it has an error that is when we press = while there are two operators consecutively we can't clear our calculator I am sure this is because the eval() throws an error but I'll fix it in the future.


ps: I just fixed the error using try-catch method on eval() now the calculator runs smoothly without any issue.

psps: while fixing above error I faced another error where all value in eval() would return error because my variable 'val' was inside so its scope was only inside try but we needed in sol() so I fixed it by defining val in sol scope.Now it runs smoothly.


pspsps: added a del button that removes only one digit so that it is easier to calculate also removed the modulus button and added del onto that so that I don't have to redesign tha calculator.