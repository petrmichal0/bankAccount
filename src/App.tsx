import { motion } from "framer-motion";
import CreateCustomer from "./features/customers/CreateCustomer";
import Customer from "./features/customers/Customer";
import AccountOperations from "./features/accounts/AccountOperations";
import BalanceDisplay from "./features/accounts/BalanceDisplay";
import { useSelector } from "react-redux";
import { RootState } from "./store";

const animations = {
  container: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5 },
  },
  item: (delay: number) => ({
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay },
  }),
};

function App() {
  const customer = useSelector((store: RootState) => store.customer.fullName);

  return (
    <motion.div {...animations.container}>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      {customer === "" ? (
        <motion.div {...animations.item(0.2)}>
          <CreateCustomer />
        </motion.div>
      ) : (
        <>
          <motion.div {...animations.item(0.2)}>
            <Customer />
          </motion.div>
          <motion.div {...animations.item(0.4)}>
            <AccountOperations />
          </motion.div>
          <motion.div {...animations.item(0.6)}>
            <BalanceDisplay />
          </motion.div>
        </>
      )}
    </motion.div>
  );
}

export default App;
