function getCart(){return JSON.parse(localStorage.getItem('shopCart')||'[]')}
function saveCart(cart){localStorage.setItem('shopCart',JSON.stringify(cart));updateCount()}
function addToCart(name,price){const cart=getCart();const item=cart.find(x=>x.name===name);if(item)item.qty++;else cart.push({name,price,qty:1});saveCart(cart);alert(name+' added to cart.')}
function updateCount(){const count=getCart().reduce((s,x)=>s+x.qty,0);document.querySelectorAll('#cart-count').forEach(e=>e.textContent=count)}
function renderCart(){const box=document.getElementById('cart'),totalBox=document.getElementById('total');if(!box)return;const cart=getCart();if(!cart.length){box.innerHTML='<p>Your cart is empty.</p>';totalBox.textContent='';updateCount();return}let total=0;box.innerHTML=cart.map((x,i)=>{total+=x.price*x.qty;return `<div class="card" style="margin:12px 0"><strong>${x.name}</strong><p>$${x.price.toFixed(2)} × ${x.qty}</p><button onclick="removeItem(${i})">Remove</button></div>`}).join('');totalBox.innerHTML='<strong>Total: $'+total.toFixed(2)+'</strong><p>Checkout is not connected yet. Add your legitimate payment provider before accepting orders.</p>';updateCount()}
function removeItem(i){const cart=getCart();cart.splice(i,1);saveCart(cart);renderCart()}
updateCount()
