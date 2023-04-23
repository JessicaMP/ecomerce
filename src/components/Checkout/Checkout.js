const Checkout = () => {
  const saveOrder = () => {
    console.log("generar orden");
  };
  return (
    <div>
      <h1>Registrar Pedido</h1>
      <h2>Ingrese sus datos</h2>
      {/* Formulario */}
      <button onClick={saveOrder}>Crear orden</button>
    </div>
  );
};

export default Checkout;
