const e={form:document.querySelector(".feedback-form"),emailInput:document.querySelector('input[name="email"]'),messageInput:document.querySelector('textarea[name="message"]')};e.form.addEventListener("input",throttle((function(){const t={email:e.emailInput.value,message:e.messageInput.value};localStorage.setItem("feedback-form-state",JSON.stringify(t))}),500)),window.addEventListener("load",(function(){const t=localStorage.getItem("feedback-form-state");if(t){const{email:a,message:n}=JSON.parse(t);e.emailInput.value=a,e.messageInput.value=n}})),e.form.addEventListener("submit",(function(t){t.preventDefault();const a={email:e.emailInput.value,message:e.messageInput.value};console.log(a),e.form.reset(),localStorage.removeItem("feedback-form-state")}));
//# sourceMappingURL=03-feedback.c7ea62f8.js.map