export const handler = async (event) => {
  const targetUrl = 'http://167.71.223.183:9090/metrics';
  const originHeader = event?.headers?.origin;
  const allowOrigin = originHeader || '*';

  try {
    const response = await fetch(targetUrl, { cf: { cacheTtl: 0 } });
    const body = await response.text();

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Access-Control-Allow-Origin': allowOrigin,
        'Access-Control-Allow-Methods': 'GET',
      },
      body,
    };
  } catch (error) {
    return {
      statusCode: 502,
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
      },
      body: `Proxy error: ${error.message}`,
    };
  }
};
