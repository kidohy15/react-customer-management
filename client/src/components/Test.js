const Refrigerator = () => {
  return (
    <div
      style={{
        width: '300px',
        height: '500px',
        border: '2px solid #000',
        borderRadius: '10px',
        position: 'relative',
      }}
    >
      {/* 냉장고 문 */}
      <div
        style={{
          width: '50%',
          height: '100%',
          backgroundColor: '#BFD3C1',
          position: 'absolute',
          top: '0',
          left: '0',
        }}
      ></div>

      {/* 냉장고 내부 */}
      <div
        style={{
          padding: '10px',
        }}
      >
        {/* 여기에 냉장고 내용 추가 가능 */}
        냉장고 내용이 여기에 들어갑니다.
      </div>
    </div>
  );
};

export default Refrigerator;