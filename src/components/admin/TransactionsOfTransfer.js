import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./TransactionsOfTransfer.css";
const TransactionsOfTransfer = () => {
  const navigate = useNavigate();

  const onPayoutButtonClick = useCallback(() => {
    navigate("/admin/transactions");
  }, [navigate]);

  const onIncomeButtonClick = useCallback(() => {
    navigate("/admin/transactionsofincome");
  }, [navigate]);

  const onAllocationButtonClick = useCallback(() => {
    navigate("/admin/transactionsofallocation");
  }, [navigate]);

  const onBtnPreviousClick = useCallback(() => {
    //TODO: go to previous
  }, []);

  const onBtnNextClick = useCallback(() => {
    //TODO: go to next
  }, []);

  return (
    <div className="transactions-of-transfer">
      <div className="transactions-transfer-containe">
        <div className="buttonssearchtable">
          <div className="buttonssearch">
            <div className="transaction-types-buttons3">
              <button className="payout-button3" onClick={onPayoutButtonClick}>
                <div className="payout3">Payout</div>
              </button>
              <button className="income-button3" onClick={onIncomeButtonClick}>
                <div className="payout3">Income</div>
              </button>
              <button
                className="allocation-button3"
                onClick={onAllocationButtonClick}
              >
                <div className="payout3">Allocation</div>
              </button>
              <button className="transfer-button3">
                <div className="transfer3">Transfer</div>
              </button>
            </div>
            <input
              className="search-input3"
              type="text"
              placeholder="search here..."
            />
          </div>
          <div className="transactions-container3">
            <div className="t-head3">
              <div className="transaction-id-title3">
                <div className="transaction-id-tit3">Transaction ID</div>
              </div>
              <div className="related-id-title2">
                <div className="transaction-id-tit3">Related ID</div>
              </div>
              <div className="full-name-title3">
                <div className="transaction-id-tit3">Full Name</div>
              </div>
              <div className="article-name-title2">
                <div className="transaction-id-tit3">Article Name</div>
              </div>
              <div className="type-title3">
                <div className="transaction-id-tit3">Type</div>
              </div>
              <div className="payment-method-title3">
                <div className="transaction-id-tit3">Payment methode</div>
              </div>
              <div className="creation-date-title3">
                <div className="transaction-id-tit3">Date</div>
              </div>
              <div className="amount-title3">
                <div className="transaction-id-tit3">Amount</div>
              </div>
            </div>
            <div className="transactions-listing3">
              <div className="t-head3">
                <div className="transaction-id-title3">
                  <div className="transaction-id-var18">#TR-0002</div>
                </div>
                <div className="related-id-title2">
                  <div className="transaction-id-var18">2</div>
                </div>
                <div className="full-name-title3">
                  <div className="transaction-id-var18">Mansour Houssam</div>
                </div>
                <div className="article-name-title2">
                  <div className="transaction-id-var18">منحة الوفاة</div>
                </div>
                <div className="type-title3">
                  <div className="transaction-id-var18">Transfer</div>
                </div>
                <div className="payment-method-title3">
                  <div className="transaction-id-var18">NULL</div>
                </div>
                <div className="creation-date-title3">
                  <div className="transaction-id-var18">May 1, 2023</div>
                </div>
                <div className="amount-title3">
                  <div className="amount-and-dzd-container21">
                    <div className="transaction-id-var18">400,000</div>
                    <div className="dzd21">DZD</div>
                  </div>
                </div>
              </div>
              <div className="t-head3">
                <div className="transaction-id-title3">
                  <div className="transaction-id-var18">#TR-0002</div>
                </div>
                <div className="related-id-title2">
                  <div className="transaction-id-var18">2</div>
                </div>
                <div className="full-name-title3">
                  <div className="transaction-id-var18">Mansour Houssam</div>
                </div>
                <div className="article-name-title2">
                  <div className="transaction-id-var18">منحة الوفاة</div>
                </div>
                <div className="type-title3">
                  <div className="transaction-id-var18">Transfer</div>
                </div>
                <div className="payment-method-title3">
                  <div className="transaction-id-var18">NULL</div>
                </div>
                <div className="creation-date-title3">
                  <div className="transaction-id-var18">May 1, 2023</div>
                </div>
                <div className="amount-title3">
                  <div className="amount-and-dzd-container21">
                    <div className="transaction-id-var18">400,000</div>
                    <div className="dzd21">DZD</div>
                  </div>
                </div>
              </div>
              <div className="t-head3">
                <div className="transaction-id-title3">
                  <div className="transaction-id-var18">#TR-0002</div>
                </div>
                <div className="related-id-title2">
                  <div className="transaction-id-var18">2</div>
                </div>
                <div className="full-name-title3">
                  <div className="transaction-id-var18">Mansour Houssam</div>
                </div>
                <div className="article-name-title2">
                  <div className="transaction-id-var18">منحة الوفاة</div>
                </div>
                <div className="type-title3">
                  <div className="transaction-id-var18">Transfer</div>
                </div>
                <div className="payment-method-title3">
                  <div className="transaction-id-var18">NULL</div>
                </div>
                <div className="creation-date-title3">
                  <div className="transaction-id-var18">May 1, 2023</div>
                </div>
                <div className="amount-title3">
                  <div className="amount-and-dzd-container21">
                    <div className="transaction-id-var18">400,000</div>
                    <div className="dzd21">DZD</div>
                  </div>
                </div>
              </div>
              <div className="t-head3">
                <div className="transaction-id-title3">
                  <div className="transaction-id-var18">#TR-0002</div>
                </div>
                <div className="related-id-title2">
                  <div className="transaction-id-var18">2</div>
                </div>
                <div className="full-name-title3">
                  <div className="transaction-id-var18">Mansour Houssam</div>
                </div>
                <div className="article-name-title2">
                  <div className="transaction-id-var18">منحة الوفاة</div>
                </div>
                <div className="type-title3">
                  <div className="transaction-id-var18">Transfer</div>
                </div>
                <div className="payment-method-title3">
                  <div className="transaction-id-var18">NULL</div>
                </div>
                <div className="creation-date-title3">
                  <div className="transaction-id-var18">May 1, 2023</div>
                </div>
                <div className="amount-title3">
                  <div className="amount-and-dzd-container21">
                    <div className="transaction-id-var18">400,000</div>
                    <div className="dzd21">DZD</div>
                  </div>
                </div>
              </div>
              <div className="t-head3">
                <div className="transaction-id-title3">
                  <div className="transaction-id-var18">#TR-0002</div>
                </div>
                <div className="related-id-title2">
                  <div className="transaction-id-var18">2</div>
                </div>
                <div className="full-name-title3">
                  <div className="transaction-id-var18">Mansour Houssam</div>
                </div>
                <div className="article-name-title2">
                  <div className="transaction-id-var18">منحة الوفاة</div>
                </div>
                <div className="type-title3">
                  <div className="transaction-id-var18">Transfer</div>
                </div>
                <div className="payment-method-title3">
                  <div className="transaction-id-var18">NULL</div>
                </div>
                <div className="creation-date-title3">
                  <div className="transaction-id-var18">May 1, 2023</div>
                </div>
                <div className="amount-title3">
                  <div className="amount-and-dzd-container21">
                    <div className="transaction-id-var18">400,000</div>
                    <div className="dzd21">DZD</div>
                  </div>
                </div>
              </div>
              <div className="t-head3">
                <div className="transaction-id-title3">
                  <div className="transaction-id-var18">#TR-0002</div>
                </div>
                <div className="related-id-title2">
                  <div className="transaction-id-var18">2</div>
                </div>
                <div className="full-name-title3">
                  <div className="transaction-id-var18">Mansour Houssam</div>
                </div>
                <div className="article-name-title2">
                  <div className="transaction-id-var18">منحة الوفاة</div>
                </div>
                <div className="type-title3">
                  <div className="transaction-id-var18">Transfer</div>
                </div>
                <div className="payment-method-title3">
                  <div className="transaction-id-var18">NULL</div>
                </div>
                <div className="creation-date-title3">
                  <div className="transaction-id-var18">May 1, 2023</div>
                </div>
                <div className="amount-title3">
                  <div className="amount-and-dzd-container21">
                    <div className="transaction-id-var18">400,000</div>
                    <div className="dzd21">DZD</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="page-details-container3">
          <div className="nbr-of-shows-transactions-deta3">
            <div className="transaction-id-tit3">Showing</div>
            <div className="transaction-id-tit3">6</div>
            <div className="transaction-id-tit3">from</div>
            <div className="transaction-id-tit3">160</div>
          </div>
          <div className="change-page-buttons3">
            <button className="btnprevious3" onClick={onBtnPreviousClick}>
              <div className="previous-icone3">
                <img className="back-ic-icon6" alt="" src="/backic.svg" />
                <img className="back-ic-icon6" alt="" src="/backic.svg" />
              </div>
              <div className="previous3">Previous</div>
            </button>
            <button className="btnnext3" onClick={onBtnNextClick}>
              <div className="previous3">Next</div>
              <div className="previous-icone3">
                <img className="next-ic-icon6" alt="" src="/nextic.svg" />
                <img className="next-ic-icon6" alt="" src="/nextic1.svg" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionsOfTransfer;
