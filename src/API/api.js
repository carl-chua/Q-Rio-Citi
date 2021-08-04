import firebase from "firebase";

export async function updateOriginalAmount(amount) {
  try {
    var transaction_id = "";

    firebase
      .firestore()
      .collection("transaction")
      .add({
        originalamount: amount,
        finalamount: 0,
        voucherID: "",
        vouchertype: "",
        vouchervalue: 0
      })
      .then(function(docRef) {
        transaction_id = docRef.id;
      })

    return transaction_id
  } catch (err) {
    console.log(JSON.stringify(err));
  }

  return 
}

export async function selectVoucher(voucher_id, transaction_id) {
  const snapshot = await firebase
    .firestore()
    .collection("merchantvouchers")
    .doc(voucher_id)
    .get();

  console.log(snapshot.data());

  selected_voucher = snapshot.data();
  voucher_type = selected_voucher.discounttype;
  voucher_value = selected_voucher.discountvalue;
  original_amount = selected_voucher.originalamount;

  firebase.firestore()
    .collection("transaction")
    .doc(transaction_id)
    .set({
      voucherID: voucher_id,
      vouchertype: voucher_type,
      vouchervalue: voucher_value
    });
   
  var final_amount = 0;
  if (voucher_type == "percent") {
    final_amount = original_amount * (1 - voucher_value/100)
  } else {
    final_amount = original_amount - voucher_value
  }

  firebase.firestore()
    .collection("transaction")
    .doc(transaction_id)
    .set({
      finalamount: final_amount
    });
  
}

export async function getTransactionDetails(transaction_id, setUser) {
  var snapshot = firebase.firestore()
    .collection("transaction")
    .doc(transaction_id)
    .get();

  setUser(snapshot.data());
}