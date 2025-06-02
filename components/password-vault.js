document.addEventListener('DOMContentLoaded', () => { // wait for the DOM to be fully loaded 

    //buttons
    const saveBtn = document.getElementById('save-password');
    const retrieveBtn = document.getElementById('retrieve-password');

    //fields
    const vaultKeyEmail = document.getElementById('vault-key-email');
    const vaultPassword = document.getElementById('vault-password');
    const vaultKey = document.getElementById('vault-key');
    const outputPasswordField = document.getElementById('vault-output');

    const vault = createVaultRecord();

    saveBtn.addEventListener('click', () => {

        const key = vaultKeyEmail.value;
        const password = vaultPassword.value

        console.log(key, password);

        if ( !key || !password) {
            alert("fill the password and email fiedls to save credentials into vault");
            return;
        }

        vault.save(key, password);
        alert(`"Passowrd saved for ${key}"`);

        vaultKeyEmail.value = '';
        vaultPassword.value = '';
    });

    retrieveBtn.addEventListener('click', () => {

        const toBeFetchedVaultKey = vaultKey.value.trim();
        if (!toBeFetchedVaultKey) {
            alert("insert a key into the key field to retrieve password!");
            return;
        }

        const result = vault.get(toBeFetchedVaultKey);
        outputPasswordField.textContent = `📦 Password: ${result}`;
        vaultKey.value = '';
    });
});

function createVaultRecord() {

    const store = {}; // Private object

    return {
        save: (key, password) => {
            store[key] = password;
            console.log(store);
        },
        get: (key) => {
             console.log(store);
            return store[key] || "No password found for this key.";
        }
    };

}



