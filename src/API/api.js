import firebase from "firebase";

export async function updateOriginalAmount(amount, setUser) {
  try {
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

      setUser(snapshot.data());
  } catch (err) {
    console.log(JSON.stringify(err));
  }
}

export async function selectVoucher(voucher_id, transaction_id, setUser) {
  const snapshot = await firebase
    .firestore()
    .collection("merchantvouchers")
    .doc(voucher_id)
    .get();

  console.log(snapshot.data());

  selected_voucher = snapshot.data()

  firebase.firestore()
    .collection("transaction")
    .doc(transactionID)
    .set({
      voucherID: voucher_id,
      vouchertype: selected_voucher.discounttype,
      vouchervalue: selected_voucher.discountvalue
    })

  setUser(snapshot.data());
}