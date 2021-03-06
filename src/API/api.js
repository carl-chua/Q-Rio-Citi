import firebase from 'firebase';

export async function updateOriginalAmount(amount, setTransactionId, setURL) {
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
        setURL(
          window.location.origin + '/customer/voucherselection/' + docRef.id
        );
      });
  } catch (err) {
    console.log(JSON.stringify(err));
  }
}

export async function successfulTransactionListener(transactionID, redirect) {
  try {
    firebase
      .firestore()
      .collection('transaction')
      .doc(transactionID)
      .onSnapshot((docSnapshot) => {
        console.log(docSnapshot.data());
        if (docSnapshot && docSnapshot.data() && docSnapshot.data().isPaid) {
          redirect();
        }
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

  await firebase
    .firestore()
    .collection('transaction')
    .doc(transaction_id)
    .update({
      voucherID: voucher_id,
      vouchertype: voucher_type,
      vouchervalue: voucher_value,
    });

  var original_amount = (
    await firebase
      .firestore()
      .collection('transaction')
      .doc(transaction_id)
      .get()
  ).data().originalamount;

  var final_amount = 0;
  if (voucher_type == 'percent') {
    final_amount = original_amount * (1 - voucher_value / 100);
  } else {
    final_amount = original_amount - voucher_value;
  }

  console.log(final_amount);

  await firebase
    .firestore()
    .collection('transaction')
    .doc(transaction_id)
    .update({
      finalamount: final_amount,
    });

  return '';
}

export async function getVoucherDetails(voucherId) {
  var snapshot = firebase
    .firestore()
    .collection('merchantvouchers')
    .doc(voucherId)
    .get();

  return (await snapshot).data();
}

export async function getTransactionDetails(transaction_id, setTransaction) {
  try {
    firebase
      .firestore()
      .collection('transaction')
      .doc(transaction_id)
      .get()
      .then((d) => {
        setTransaction(d.data());
      });
  } catch (err) {
    console.log(JSON.stringify(err));
  }
}

export async function updatePaymentState(transaction_id) {
  try {
    await firebase
      .firestore()
      .collection('transaction')
      .doc(transaction_id)
      .update({
        isPaid: true,
      });
  } catch (err) {
    console.log(JSON.stringify(err));
  }
}
