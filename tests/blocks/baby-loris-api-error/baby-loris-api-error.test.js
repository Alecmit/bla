modules.define('test', ['baby-loris-api-error'], function (provide, ApiError) {

    describe('baby-loris-api-error', function () {
        var error;

        beforeEach(function () {
            error = new ApiError('BAD_TIMES', 'Something bad just happened');
        });

        it('should be an instance of Error and ApiError', function () {
            error.should.be.instanceOf(Error);
            error.should.be.instanceOf(ApiError);
        });

        it('should have built-in error types', function () {
            should.exist(ApiError.BAD_REQUEST);
            should.exist(ApiError.NOT_FOUND);
            should.exist(ApiError.INTERNAL_ERROR);
        });

        it('should have a corret type', function () {
            error.type.should.be.equal('BAD_TIMES');
        });

        it('should have a corret message', function () {
            error.toString().should.be.equal('ApiError: Something bad just happened');
        });

        it('should be thrown in a right way', function () {
            var fn = function () {
                throw error;
            };

            fn.should.throw(Error);
            fn.should.throw(ApiError);
        });
    });

    provide();
});
