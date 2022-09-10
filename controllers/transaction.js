const Transaction = require('../models/Transaction')

// @desc    Get all transactions
// @route   /api/v1/transaction
// @access  Public
exports.getTransactions = async (req, res, next) => {
    try {
        const transaction = await Transaction.find()

        return res.status(200).json({
            success: true,
            count: transaction.count,
            data: transaction
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: "server error"
        })
    }
}

// @desc    Post a transaction
// @route   /api/v1/transaction
// @access  Public
exports.postTransaction = async (req, res, next) => {
    try {
        const {text, amount} = req.body // the name "text", "amount" is coming from schema
        const transaction = await Transaction.create(req.body)
    
        return res.status(201).json({
            success: true,
            data: transaction
        })
    } catch (err) {
        if(err.name === "ValidationError"){
            const messages = Object.values(err.errors).map(val => val.message)

            return res.status(400).json({
                success: false,
                error: messages
            })
        }else{
            return res.status(500).json({
                success:false,
                error: "server error"
            })
        }
        // res.send(err)
    }
}

// @desc    Delete all transaction
// @route   /api/v1/transaction/:id
// @access  Public
exports.deleteTransaction = async (req, res, next) => {
    try {
        const transaction = await Transaction.findById(req.params.id) // finadByIdAndRemove() can be used which returns the document but finadByIdAndDelete() doesn't

        if(!transaction){
            return res.status(404).json({
                success: false,
                error: "No transaction found!!!"
            })
        }

        await transaction.remove() //remove() can be called on resource(transaction), not on model(Transaction)

        return res.status(200).json({
            success: true,
            data: {}
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: "server error"
        })
    }
}