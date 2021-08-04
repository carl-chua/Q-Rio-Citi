import firebase from 'firebase';

export async function updateOriginalAmount(amount, setTransactionId) {
  try {
    firebase
      .firestore()
      .collection('transaction')
      .add({
        originalamount: amount,
        finalamount: 0,
        voucherID: '',
        vouchertype: '',
        vouchervalue: 0,
        isPaid: false,
      })
      .then((docRef) => {
        setTransactionId(docRef.id);
      });
  } catch (err) {
    console.log(JSON.stringify(err));
  }
}

export async function successfulTransactionListener(
  transactionID,
  setTransaction
) {
  try {
    firebase
      .firestore()
      .collection('transaction')
      .doc(transactionID)
      .onSnapshot((docSnapshot) => {
        setTransaction(docSnapshot.data());
      });
  } catch (err) {
    console.log(JSON.stringify(err));
  }
}

export async function selectVoucher(voucher_id, transaction_id) {
  const snapshot = await firebase
    .firestore()
    .collection('merchantvouchers')
    .doc(voucher_id)
    .get();

  console.log(snapshot.data());

  var selected_voucher = snapshot.data();
  var voucher_type = selected_voucher.discounttype;
  var voucher_value = selected_voucher.discountvalue;
  var original_amount = selected_voucher.originalamount;

  firebase.firestore().collection('transaction').doc(transaction_id).set({
    voucherID: voucher_id,
    vouchertype: voucher_type,
    vouchervalue: voucher_value,
  });

  var final_amount = 0;
  if (voucher_type == 'percent') {
    final_amount = original_amount * (1 - voucher_value / 100);
  } else {
    final_amount = original_amount - voucher_value;
  }

  firebase.firestore().collection('transaction').doc(transaction_id).set({
    finalamount: final_amount,
  });
}

export async function getTransactionDetails(transaction_id) {
  var snapshot = firebase
    .firestore()
    .collection('transaction')
    .doc(transaction_id)
    .get();

  return (await snapshot).data();
}
