import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./TransactionsOfIncome.css";
const TransactionsOfIncome = () => {
  const navigate = useNavigate();

  const onPayoutButtonClick = useCallback(() => {
    navigate("/admin/transactions");
  }, [navigate]);

  const onAllocationButtonClick = useCallback(() => {
    navigate("/admin/transactionsofallocation");
  }, [navigate]);

  const onTransferButtonClick = useCallback(() => {
    navigate("/admin/transactionsoftransfer");
  }, [navigate]);

  const onBtnPreviousClick = useCallback(() => {
    //TODO: go to previous
  }, []);

  const onBtnNextClick = useCallback(() => {
    //TODO: go to next
  }, []);

  return (
    <div className="transactions-of-income">
      <div className="transactions-income-container">
        <div className="buttonsbalancecontainersearc">
          <div className="buttonsbalancecontainersear">
            <div className="buttonsbalancecontainer">
              <div className="transaction-types-buttons">
                <button className="payout-button" onClick={onPayoutButtonClick}>
                  <div className="payout">Payout</div>
                </button>
                <button className="income-button">
                  <div className="income">Income</div>
                </button>
                <button
                  className="allocation-button"
                  onClick={onAllocationButtonClick}
                >
                  <div className="payout">Allocation</div>
                </button>
                <button
                  className="transfer-button"
                  onClick={onTransferButtonClick}
                >
                  <div className="payout">Transfer</div>
                </button>
              </div>
              <div className="balancecontainer">
                <div className="text">Total Income Balance</div>
                <div className="balance">
                  <div className="amount-and-dzd-container">
                    <div className="total-income-balance">2,000,000</div>
                    <div className="dzd">DZD</div>
                  </div>
                </div>
              </div>
            </div>
            <input
              className="search-input"
              type="text"
              placeholder="search here..."
            />
          </div>
          <div className="transactions-container">
            <div className="t-head">
              <div className="transaction-id-title">
                <div className="text">Transaction ID</div>
              </div>
              <div className="full-name-title">
                <div className="text">Full Name</div>
              </div>
              <div className="related-id-title">
                <div className="text">Related ID</div>
              </div>
              <div className="type-title">
                <div className="text">Type</div>
              </div>
              <div className="payment-method-title">
                <div className="text">Payment methode</div>
              </div>
              <div className="creation-date-title">
                <div className="text">Date</div>
              </div>
              <div className="amount-title">
                <div className="text">Amount</div>
              </div>
            </div>
            <div className="transactions-listing">
              <div className="t-head">
                <div className="transaction-id-title">
                  <div className="transaction-id-var">#TR-0002</div>
                </div>
                <div className="full-name-title">
                  <div className="transaction-id-var">Mansour Houssam</div>
                </div>
                <div className="related-id-title">
                  <div className="transaction-id-var">NULL</div>
                </div>
                <div className="type-title">
                  <div className="transaction-id-var">Income</div>
                </div>
                <div className="payment-method-title">
                  <div className="transaction-id-var">Cash</div>
                </div>
                <div className="creation-date-title">
                  <div className="transaction-id-var">May 1, 2023</div>
                </div>
                <div className="amount-title">
                  <div className="amount-and-dzd-container">
                    <div className="transaction-id-var">400,000</div>
                    <div className="dzd1">DZD</div>
                  </div>
                </div>
              </div>
              <div className="t-head">
                <div className="transaction-id-title">
                  <div className="transaction-id-var">#TR-0002</div>
                </div>
                <div className="full-name-title">
                  <div className="transaction-id-var">Mansour Houssam</div>
                </div>
                <div className="related-id-title">
                  <div className="transaction-id-var">NULL</div>
                </div>
                <div className="type-title">
                  <div className="transaction-id-var">Income</div>
                </div>
                <div className="payment-method-title">
                  <div className="transaction-id-var">Cash</div>
                </div>
                <div className="creation-date-title">
                  <div className="transaction-id-var">May 1, 2023</div>
                </div>
                <div className="amount-title">
                  <div className="amount-and-dzd-container">
                    <div className="transaction-id-var">400,000</div>
                    <div className="dzd1">DZD</div>
                  </div>
                </div>
              </div>
              <div className="t-head">
                <div className="transaction-id-title">
                  <div className="transaction-id-var">#TR-0002</div>
                </div>
                <div className="full-name-title">
                  <div className="transaction-id-var">Mansour Houssam</div>
                </div>
                <div className="related-id-title">
                  <div className="transaction-id-var">NULL</div>
                </div>
                <div className="type-title">
                  <div className="transaction-id-var">Income</div>
                </div>
                <div className="payment-method-title">
                  <div className="transaction-id-var">Cash</div>
                </div>
                <div className="creation-date-title">
                  <div className="transaction-id-var">May 1, 2023</div>
                </div>
                <div className="amount-title">
                  <div className="amount-and-dzd-container">
                    <div className="transaction-id-var">400,000</div>
                    <div className="dzd1">DZD</div>
                  </div>
                </div>
              </div>
              <div className="t-head">
                <div className="transaction-id-title">
                  <div className="transaction-id-var">#TR-0002</div>
                </div>
                <div className="full-name-title">
                  <div className="transaction-id-var">Mansour Houssam</div>
                </div>
                <div className="related-id-title">
                  <div className="transaction-id-var">NULL</div>
                </div>
                <div className="type-title">
                  <div className="transaction-id-var">Income</div>
                </div>
                <div className="payment-method-title">
                  <div className="transaction-id-var">Cash</div>
                </div>
                <div className="creation-date-title">
                  <div className="transaction-id-var">May 1, 2023</div>
                </div>
                <div className="amount-title">
                  <div className="amount-and-dzd-container">
                    <div className="transaction-id-var">400,000</div>
                    <div className="dzd1">DZD</div>
                  </div>
                </div>
              </div>
              <div className="t-head">
                <div className="transaction-id-title">
                  <div className="transaction-id-var">#TR-0002</div>
                </div>
                <div className="full-name-title">
                  <div className="transaction-id-var">Mansour Houssam</div>
                </div>
                <div className="related-id-title">
                  <div className="transaction-id-var">NULL</div>
                </div>
                <div className="type-title">
                  <div className="transaction-id-var">Income</div>
                </div>
                <div className="payment-method-title">
                  <div className="transaction-id-var">Cash</div>
                </div>
                <div className="creation-date-title">
                  <div className="transaction-id-var">May 1, 2023</div>
                </div>
                <div className="amount-title">
                  <div className="amount-and-dzd-container">
                    <div className="transaction-id-var">400,000</div>
                    <div className="dzd1">DZD</div>
                  </div>
                </div>
              </div>
              <div className="t-head">
                <div className="transaction-id-title">
                  <div className="transaction-id-var">#TR-0002</div>
                </div>
                <div className="full-name-title">
                  <div className="transaction-id-var">Mansour Houssam</div>
                </div>
                <div className="related-id-title">
                  <div className="transaction-id-var">NULL</div>
                </div>
                <div className="type-title">
                  <div className="transaction-id-var">Income</div>
                </div>
                <div className="payment-method-title">
                  <div className="transaction-id-var">Cash</div>
                </div>
                <div className="creation-date-title">
                  <div className="transaction-id-var">May 1, 2023</div>
                </div>
                <div className="amount-title">
                  <div className="amount-and-dzd-container">
                    <div className="transaction-id-var">400,000</div>
                    <div className="dzd1">DZD</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="page-details-container">
          <div className="nbr-of-shows-transactions-deta">
            <div className="text">Showing</div>
            <div className="text">6</div>
            <div className="text">from</div>
            <div className="text">160</div>
          </div>
          <div className="change-page-buttons">
            <button className="btnprevious" onClick={onBtnPreviousClick}>
              <div className="previous-icone">
                <img className="back-ic-icon" alt="" src="/backic.svg" />
                <img className="back-ic-icon" alt="" src="/backic.svg" />
              </div>
              <div className="previous">Previous</div>
            </button>
            <button className="btnnext" onClick={onBtnNextClick}>
              <div className="previous">Next</div>
              <div className="previous-icone">
                <img className="next-ic-icon" alt="" src="/nextic.svg" />
                <img className="next-ic-icon" alt="" src="/nextic1.svg" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionsOfIncome;
