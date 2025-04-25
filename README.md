# CSP failure for MUI-X Data Grid

This project is to demonstrate the CSP errors caused by the [[DataGrid] refactor: theme to CSS variables PR](https://github.com/mui/mui-x/pull/16588).

It renders the simple grid from [MUI X Quickstart](https://mui.com/x/react-data-grid/)
and serves it up locally using Vite with the following CSP header(s):

> Content-Security-Policy: style-src-elem 'self' 'nonce-N0NCE'; style-src 'self' 'nonce-N0NCE';

The cause is that the inline `<style>` element with no `nonce` value.
