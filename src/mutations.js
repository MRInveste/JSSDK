export const WS_CONNECTED = 'connection/WS_CONNECTED';
export const WS_DISCONNECTED = 'connection/WS_DISCONNECTED';
export const SET_WS_CONNECTING = 'connection/SET_WS_CONNECTING';
export const RPC_STATUS_UPDATE = 'connection/RPC_STATUS_UPDATE';
export const SET_RPC_STATUS_CALLBACK = 'connection/SET_RPC_STATUS_CALLBACK';



export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
export const FETCH_USER_COMPLETE = 'FETCH_USER_COMPLETE';
export const FETCH_USER_ERROR = 'FETCH_USER_ERROR';

export const ACCOUNT_SIGNUP_REQUEST = 'ACCOUNT_SIGNUP_REQUEST';
export const ACCOUNT_SIGNUP_COMPLETE = 'ACCOUNT_SIGNUP_COMPLETE';
export const ACCOUNT_SIGNUP_ERROR = 'ACCOUNT_SIGNUP_ERROR';
export const ACCOUNT_LOGIN_REQUEST = 'ACCOUNT_LOGIN_REQUEST';
export const ACCOUNT_LOGIN_COMPLETE = 'ACCOUNT_LOGIN_COMPLETE';
export const ACCOUNT_LOGIN_ERROR = 'ACCOUNT_LOGIN_ERROR';
export const ACCOUNT_LOCK_WALLET = 'ACCOUNT_LOCK_WALLET';
export const ACCOUNT_UNLOCK_WALLET = 'ACCOUNT_UNLOCK_WALLET';
export const ACCOUNT_BRAINKEY_BACKUP = 'ACCOUNT_BRAINKEY_BACKUP';
export const SET_ACCOUNT_USER_DATA = 'SET_ACCOUNT_USER_DATA';
export const ACCOUNT_LOGOUT = 'ACCOUNT_LOGOUT';
export const FETCH_CURRENT_USER_REQUEST = 'FETCH_CURRENT_USER_REQUEST';
export const FETCH_CURRENT_USER_COMPLETE = 'FETCH_CURRENT_USER_COMPLETE';
export const FETCH_CURRENT_USER_ERROR = 'FETCH_CURRENT_USER_ERROR';
export const CLEAR_CURRENT_USER_DATA = 'CLEAR_CURRENT_USER_DATA';
export const CLEAR_CURRENT_USER_WALLET_DATA = 'CLEAR_CURRENT_USER_WALLET_DATA';

export const FETCH_USER_OPERATIONS_REQUEST = 'FETCH_USER_OPERATIONS_REQUEST';
export const FETCH_USER_OPERATIONS_COMPLETE = 'FETCH_USER_OPERATIONS_COMPLETE';
export const FETCH_USER_OPERATIONS_ERROR = 'FETCH_USER_OPERATIONS_ERROR';
export const UNSUBSCRIBE_FROM_USER_OPERATIONS = 'UNSUBSCRIBE_FROM_USER_OPERATIONS';
export const SUBSCRIBE_TO_USER_OPERATIONS = 'SUBSCRIBE_TO_USER_OPERATIONS';
export const ADD_USER_OPERATION = 'ADD_USER_OPERATION';
export const RESET_OPERATIONS = 'RESET_OPERATIONS';

export const FETCH_ASSETS_REQUEST = 'FETCH_ASSETS_REQUEST';
export const FETCH_ASSETS_COMPLETE = 'FETCH_ASSETS_COMPLETE';
export const FETCH_ASSETS_ERROR = 'FETCH_ASSETS_ERROR';
export const FETCH_DEFAULT_ASSETS_REQUEST = 'FETCH_DEFAULT_ASSETS_REQUEST';
export const FETCH_DEFAULT_ASSETS_COMPLETE = 'FETCH_DEFAULT_ASSETS_COMPLETE';
export const FETCH_DEFAULT_ASSETS_ERROR = 'FETCH_DEFAULT_ASSETS_ERROR';

export const SAVE_DEFAULT_ASSETS_IDS = 'SAVE_DEFAULT_ASSETS_IDS';



export const FETCH_MARKET_HISTORY_REQUEST = 'FETCH_MARKET_HISTORY_REQUEST';
export const FETCH_MARKET_HISTORY_COMPLETE = 'FETCH_MARKET_HISTORY_COMPLETE';
export const FETCH_MARKET_HISTORY_ERROR = 'FETCH_MARKET_HISTORY_ERROR';
export const UPDATE_MARKET_PRICE = 'UPDATE_MARKET_PRICE';
export const SUB_TO_MARKET_COMPLETE = 'SUB_TO_MARKET_COMPLETE';
export const UNSUB_FROM_MARKET_COMPLETE = 'UNSUB_FROM_MARKET_COMPLETE';

export const TRANSFER_ASSET_REQUEST = 'TRANSFER_ASSET_REQUEST';
export const TRANSFER_ASSET_ERROR = 'TRANSFER_ASSET_ERROR';
export const TRANSFER_ASSET_COMPLETE = 'TRANSFER_ASSET_COMPLETE';
export const UPDATE_PENDING_ORDERS = 'UPDATE_PENDING_ORDERS';
export const SET_PENDING_DISTRIBUTION = 'SET_PENDING_DISTRIBUTION';
export const REMOVE_PENDING_DISTRIBUTION = 'REMOVE_PENDING_DISTRIBUTION';
export const RESET_PENDING_ORDERS = 'RESET_PENDING_ORDERS';
export const PROCESS_PENDING_ORDERS_REQUEST = 'PROCESS_PENDING_ORDERS_REQUEST';
export const PROCESS_PENDING_ORDERS_COMPLETE = 'PROCESS_PENDING_ORDERS_COMPLETE';
export const PROCESS_PENDING_ORDERS_ERROR = 'PROCESS_PENDING_ORDERS_ERROR';
export const PROCESS_PENDING_ORDERS_SELL_COMPLETE = 'PROCESS_PENDING_ORDERS_SELL_COMPLETE';

export const FETCH_FEES = 'FETCH_FEES';

export const SET_PENDING_TRANSFER = 'SET_PENDING_TRANSFER';

export const STORE_BACKUP_DATE = 'STORE_BACKUP_DATE';

export const FETCH_OPENLEDGER_DEPOSIT_ADDRESS_REQUEST = 'FETCH_OPENLEDGER_DEPOSIT_ADDRESS_REQUEST';
export const FETCH_OPENLEDGER_DEPOSIT_ADDRESS_COMPLETE ='FETCH_OPENLEDGER_DEPOSIT_ADDRESS_COMPLETE';
export const FETCH_OPENLEDGER_DEPOSIT_ADDRESS_ERROR = 'FETCH_OPENLEDGER_DEPOSIT_ADDRESS_ERROR';

export const FETCH_OPENLEDGER_COINS_REQUEST = 'FETCH_OPENLEDGER_COINS_REQUEST';
export const FETCH_OPENLEDGER_COINS_COMPLETE = 'FETCH_OPENLEDGER_COINS_COMPLETE';
export const FETCH_OPENLEDGER_COINS_ERROR = 'FETCH_OPENLEDGER_COINS_ERROR';

export const FETCH_PRICES_HISTORY_REQUEST = 'FETCH_PRICES_HISTORY_REQUEST';
export const FETCH_PRICES_HISTORY_COMPLETE = 'FETCH_PRICES_HISTORY_COMPLETE';
export const FETCH_PRICES_HISTORY_ERROR = 'FETCH_PRICES_HISTORY_ERROR';


export const SET_CALLBACK = 'SET_CALLBACK';
export const SET_OP_CALLBACK = 'SET_OP_CALLBACK';

export const SET_ORDER_DATA = 'SET_ORDER_DATA';
export const SET_TRX_DATA = 'SET_TRX_DATA';
export const SET_PASSWORD_LONGIN_KEY = 'SET_PASSWORD_LONGIN_KEY';


export const SET_MARKET_STATS = 'SET_MARKET_STATS';


export const SET_KEYS = 'SET_KEYS';

export const SET_PASSWORD_KEY = 'SET_PASSWORD_KEY';

export const SET_AES_PRIVATE = 'SET_AES_PRIVATE';

export const SET_VOTES_STATE = 'SET_VOTES_STATE';

export const SET_ALL_WITNESSES_COMMITTEE = 'SET_ALL_WITNESSES_COMMITTEE';

export const SET_ALL_TYPE = 'SET_ALL_TYPE';

export const SET_VOTE_IDS = 'SET_VOTE_IDS';

export const SET_GLOBAL_OBJECT = 'SET_GLOBAL_OBJECT';

export const set_getVoteObjects_callback = 'set_getVoteObjects_callback';

export const set_publishVotes_callback = 'set_publishVotes_callback';

export const SET_VOTE_IDS_OBJ = 'SET_VOTE_IDS_OBJ';


export const SET_SETTINGS_APIS = 'setting/SET_SETTINGS_APIS';
export const SET_SELECT_WS_NODE = 'setting/SET_SELECT_WS_NODE';
export const ADD_API_NODE="setting/ADD_API_NODE";
export const DELETE_API_NODE="setting/DELETE_API_NODE";
export const SET_AUTO_RECONNECT="setting/SET_AUTO_RECONNECT";
export const SET_CONNECTING_URL="setting/SET_CONNECTING_URL";



export const SET_LAST_CURRENT_ASLOT="SET_LAST_CURRENT_ASLOT";

export const SET_ASSETS="SET_ASSETS";

export const SET_APP_KEYS="SET_APP_KEYS";

export const CLEAR_KEYS="CLEAR_KEYS";


export const CLEAR_ACCOUNT="CLEAR_ACCOUNT";



export const SET_ONLY_GET_OP_FEE="SET_ONLY_GET_OP_FEE";

export const SET_QUERY_ACCOUNT="SET_QUERY_ACCOUNT";


