const costInput = document.getElementById('cost_per_litre');
const litresInput = document.getElementById('per_litre_purchased');
const calculatebutton = document.getElementById('calculatebutton');
const totalDisplay = document.getElementById('costTotal');


function calculateTotal() {
  
  const cost_per_litre = parseFloat(costInput.value);
  const litres = parseFloat(litresInput.value);


  const total = cost_per_litre * litres;


  totalDisplay.textContent = `Total cost: £${total.toFixed(2)}`;
}


calculatebutton.addEventListener('click', calculateTotal);