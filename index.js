var katzDeli=[];

function takeANumber(katzDeliLine,name)
{
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine)
{
  if(katzDeliLine.length==0)
  {
    return 'There is nobody waiting to be served!'
  }

  else {
    return `Currently serving ${katzDeliLine[0]}.`
    katzDeliLine.shift()
  }
}

function currentLine(katzDeliLine)
{
  if(katzDeliLine.length==0)
  {
    return 'The line is currently empty.'
  }

  else {
    return `The line is currently: ${katzDeliLine[0,katzDeliLine.length]}`
    /*console.log('The line is currently: ')
    for(var i=0;i<katzDeliLine.length;i++)
    {
      console.log(`${i}. ${katzDeliLine[i]},`)
    }*/
  }

}
